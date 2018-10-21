import * as d3 from 'd3';
import {convertNumber} from '../../utils/unit';
class Donut {
  constructor(svgID, unit, graphTitle) {
    this.svgID = svgID;
    this.unit = unit;
    this.graphTitle = ''; // 图形标题
    this.charts = d3.select('#svgDonutGraph' + this.svgID);
    this.chart_r = 0;
    this.expandRadius = 1.08;
    this.color = ['#019bfd', '#befeff']
    this.legendTextLinHeight = 24;
    this.legendWidth = 100;
  }

  getCatNames(dataset) {
    let catNames = [];
    for (let i = 0; i < dataset[0].data.length; i++) {
      catNames.push(dataset[0].data[i].cat);
    }
    return catNames;
  }

  createLegend(catNames) {
    this.charts.select('.legend' + this.svgID).selectAll('g').remove();
    let legends = this.charts.select('.legend' + this.svgID)
    // .append('g').attr('class','overflow-y-auto')
      .selectAll('g')
      .data(catNames)
      .enter().append('g')
      .attr('transform', (d, i) => {
        return 'translate(20,' + (i * this.legendTextLinHeight + this.legendTextLinHeight * 2) + ')';
      });

    legends.append('circle')
      .attr('class', 'legend-icon')
      .attr('r', 6)
      .style('fill', (d, i) => {
        return this.color[i];
      });

    legends.append('text')
      .attr('dx', '1em')
      .attr('dy', '.3em')
      .text(function (d) {
        return d;
      })
      .style("fill", "#fff")

    this.charts.select('.legend' + this.svgID)
      .append('g')
      .attr('transform', 'translate(5, 12)')
      .append('text')
      .attr('dx', '1em')
      .attr('dy', '.3em').text(this.graphTitle);
  };

  createCenter(pie) {
    let classThis = this;

    let donuts = d3.selectAll('.donut' + this.svgID);
    // The circle displaying total data.
    donuts.append("svg:circle")
      .attr('key', this.svgID + 'circle')
      .attr("r", this.chart_r * 0.6)
      .style("fill", "#fff")
      .on('mouseover', function(d, i) {
          d3.select(this)
              .transition()
              .attr("r", classThis.chart_r * 0.65);
      })
      .on('mouseout', function (d, i) {
          d3.select(this)
              .transition()
              .duration(500)
              // .ease('bounce')
              .attr("r", classThis.chart_r * 0.6);
      })
      .on('click', function () {
          let paths = classThis.charts.selectAll('.clicked' + this.svgID);
          classThis.pathAnim(paths, 0);
          paths.classed('clicked' + this.svgID, false);
          this.resetAllCenterText();
      })
    let fontSize = '12px';
    let num = 0.25;
    let scale = 'scale(1)';
    if(this.chart_r < 53){
      //fontSize = '8px';
      scale = 'scale(0.7)';
      num = 0.35;
    }
    donuts.append('text')
      .attr('key', this.svgID + 'textType')
      .attr('class', 'center-txt type' + this.svgID)
      .attr('y', this.chart_r * -num)
      .attr('text-anchor', 'middle')
      .text(function (d, i) {
          console.log('text----d.type', d.type)
            return d.type;
        })
      .style({'font-weight': 'bold','font-size':fontSize ,'transform':scale})

    donuts.append('text')
      .attr('key', this.svgID + 'textValue')
      .attr('id', 'value' + this.svgID)
      .attr('class', 'center-txt value' + this.svgID)
      .attr('text-anchor', 'middle')
      .style({'font-size':fontSize,'transform':scale});
    donuts.append('text')
      .attr('key', this.svgID + 'textPercent')
      .attr('class', 'center-txt percentage' + this.svgID)
      .attr('y', this.chart_r * num)
      .attr('text-anchor', 'middle')
      .style({'fill':'#A2A2A2','font-size':fontSize,'transform':scale});
  }

  setCenterText(thisDonut) {
    let sum = d3.sum(thisDonut.selectAll('.clicked' + this.svgID).data(), function (d) {
      return d.data.val;
    });
    console.log("和", sum)
    thisDonut.select('#value' + this.svgID)
      .text((d) => {
        if (sum) {
          let numberText = convertNumber(sum, this.unit);
          if (Number.isFinite(numberText.size)) {
            return numberText.size.toFixed(0) + numberText.unit + d.unitText;
          } else {
            return sum.toFixed(0) + d.unitText;
          }
        } else {
          let number = convertNumber(d.total, this.unit);
          if (Number.isFinite(number.size)) {
            return number.size.toFixed(0) + number.unit + d.unitText;
          } else {
            return d.total.toFixed(0) + d.unitText;
          }
        }
      });
    thisDonut.select('.percentage' + this.svgID)
      .text(function (d) {
          console.log('百分比', d)
        return (sum) ? (sum / d.total * 100).toFixed(2) + '%'
          : '';
      });
  }

  resetAllCenterText(dataset) {
    if (dataset) {
      this.charts.selectAll('#value' + this.svgID).data(dataset);
    }
    this.charts.selectAll('#value' + this.svgID)
      .text((d) => {
        let number = convertNumber(d.total, this.unit);
        if (Number.isFinite(number.size)) {
          return number.size.toFixed(0) + number.unit + d.unitText;
        } else {
          return d.total.toFixed(0) + d.unitText;
        }
      });
    this.charts.selectAll('.percentage' + this.svgID)
      .text('');
  }

  pathAnim(path, dir) {
    switch (dir) {
      case 0:
        path.transition()
          .duration(500)
          // .easeQuadOut()
          .attr('d', d3.arc()
            .innerRadius(this.chart_r * 0.7)
            .outerRadius(this.chart_r)
          );
        break;

      case 1:
        path.transition()
          .attr('d', d3.arc()
            .innerRadius(this.chart_r * 0.7)
            .outerRadius(this.chart_r * this.expandRadius)
          );
        break;
    }
  };

  updateDonut(dataset) {
    let classThis = this;

    let pie = d3.pie()
      .sort(null)
      .value(function (d) {
        return d.val;
      });

    let arc = d3.arc()
      .innerRadius(this.chart_r * 0.7)
      .outerRadius(function () {
        return (d3.select(this).classed('clicked' + classThis.svgID)) ? classThis.chart_r * classThis.expandRadius
          : classThis.chart_r;
      });

    // Start joining data with paths
    let paths = this.charts.selectAll('.donut' + this.svgID)
      .selectAll('path')
      .data(function (d, i) {
        return pie(d.data);
      });
    paths.transition().duration(1000).attr('d', arc);

    let _path = paths.enter()
        .append('svg:path')

      _path.attr('key', (d, i) => {
        return this.svgID + i.toString();
      })
      .attr('d', arc)
      .style('fill', (d, i) => {
        return this.color[i];
      })
      .style('stroke', 'transparent')
      .on('mouseover', function (d, i, j) {

          classThis.pathAnim(d3.select(this), 1);
          let thisDonut = classThis.charts.select('.type' + i + classThis.svgID);
          thisDonut.select('#value' + classThis.svgID).text(function (donut_d) {
              let number = convertNumber(d.data.val, classThis.unit);
              console.log("鼠标移入", number, d)
              if (Number.isFinite(number.size)) {
                  return number.size.toFixed(0) + number.unit + donut_d.unitText;
              } else {
                  return d.data.val.toFixed(0) + donut_d.unitText;
              }
          });
          thisDonut.select('.percentage' + classThis.svgID).text(function (donut_d) {
              return (d.data.val / donut_d.total * 100).toFixed(2) + '%';
          });
      })
      .on('mouseout', function (d, i, j) {
          let thisPath = d3.select(this);
          if (!thisPath.classed('clicked' + classThis.svgID)) {
              classThis.pathAnim(thisPath, 0);
          }
          let thisDonut = classThis.charts.select('.type' + i + classThis.svgID);
          classThis.setCenterText(thisDonut);
      })
      .on('click', function (d, i, j) {
          let thisDonut = classThis.charts.select('.type' + i + classThis.svgID);

          if (0 === thisDonut.selectAll('.clicked' + classThis.svgID)[0].length) {
              thisDonut.select('circle').on('click')();
          }

          let thisPath = d3.select(this);
          let clicked = thisPath.classed('clicked' + classThis.svgID);
          classThis.pathAnim(thisPath, ~~(!clicked));
          thisPath.classed('clicked' + classThis.svgID, !clicked);

          classThis.setCenterText(thisDonut);
      })
    paths.exit().remove();
    this.resetAllCenterText(dataset);


  }

  create(dataset) {
    let charts = document.getElementById('svgDonutGraph' + this.svgID);
      // charts.clientWidth = 291
      console.log("")
    if(charts.clientHeight === 0 || charts.clientHeight === 0) {
        charts.setAttribute('clientHeight', '403')
        charts.setAttribute('clientWidth', '290')
    }
    let eleWidth = charts.clientWidth;
      this.chart_r = ((charts.clientHeight < (eleWidth - this.legendWidth)) * charts.clientHeight + (charts.clientHeight >= (eleWidth - this.legendWidth)) * (eleWidth - this.legendWidth)) / dataset.length / 2 * 0.85 - 7;
    let svgHeight = (dataset[0].legendSize + 1) * this.legendTextLinHeight + this.legendTextLinHeight * 2;
    if (svgHeight > (charts.clientHeight - 1)) {
      svgHeight = charts.clientHeight - 1;
    }
    // console.debug('width', eleWidth - this.legendWidth - 15);
    this.charts.selectAll('svg').remove();
    this.charts.selectAll('.donut' + this.svgID).remove();
    this.charts.append('svg')
      .attr('id', 'svgLegend' + this.svgID)
      .attr('key', 'svgLegend' + this.svgID)
      .attr('class', 'legend' + this.svgID)
      .attr('height', svgHeight)
      .attr('width', this.legendWidth)
      .style('float', 'left');

    let donut = this.charts.selectAll('.donut' + this.svgID)
      .data(dataset)
      .enter().append('svg')
      .attr('key', 'svgGraph' + this.svgID)
      .attr('width', eleWidth - this.legendWidth - 20)
      .attr('height', charts.clientHeight - 1)
      .style('float', 'left')
      .append('svg:g')
      .attr('key', 'dountG' + this.svgID)
      .attr('class', (d, i) => {
        return 'donut' + this.svgID + ' type' + i + this.svgID;
      })
      .attr('transform', 'translate(' + (this.chart_r * this.expandRadius ) + ',' + (this.chart_r * this.expandRadius) + ')');
    this.createLegend(this.getCatNames(dataset));
    this.createCenter();
    if (dataset[0].total >= 0) {
      this.updateDonut(dataset);
    }
  }

  update(dataset) {
    this.create(dataset);
    // this.charts.selectAll(".donut" + this.svgID)
    //   .data(dataset);
    this.updateDonut(dataset);
  }
}

export default Donut;
