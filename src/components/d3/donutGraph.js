import React, { Component } from "react";
import Donut from './donut';
import {convertNumber, numberUnit} from '../../utils/unit';
import Immutable from 'immutable';
require('../../style/donutGraph.scss');

class DonutGraph extends Component {
  constructor(props) {
    super(props);
    // this.state = this.getState();
      this.state = {
          mounted: false,
          graphRendered: false,
          svgID: Math.random().toString().split('.')[1],
          donut: null,
          dataSet: []
      }
    this.setRender = this.setRender.bind(this);
    this.updateDonutData = this.updateDonutData.bind(this);
    this.initDonut = this.initDonut.bind(this);
    this.renderDonut = this.renderDonut.bind(this);
  }
  componentWillMount(){
    window.addEventListener("resize", this.setRender);
  }
  componentWillUnmount(){
    window.removeEventListener("resize", this.setRender);
  }

  componentDidMount() {
    setTimeout(()=> {
        this.setState({mounted: true, dataSet: this.props.dataSet}, this.setRender);
    },20)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.dataSet && nextProps.category) {
      if (nextProps.render && !this.props.render && !this.state.graphRendered) {
        this.setState({dataSet: nextProps.dataSet}, this.renderDonut);
      } else if (nextProps.render && this.props.render) {
        let oldCategory = Immutable.fromJS(this.props.category);
        let newCategory = Immutable.fromJS(nextProps.category);
        let oldData = Immutable.fromJS(this.props.dataSet);
        let newData = Immutable.fromJS(nextProps.dataSet);
        if (!newData.equals(oldData) || !newCategory.equals(oldCategory)) {
          this.setState({dataSet: nextProps.dataSet}, this.updateDonutData);
        }
      } else if (nextProps.render && !this.props.render && this.state.graphRendered) {
        this.setState({dataSet: nextProps.dataSet}, this.updateDonutData);
      }
    }
  }

  setRender() {
    this.initDonut();
  }

  initDonut() {
    let donut = new Donut(this.state.svgID, this.props.unit, this.props.graphTitle);
    this.setState({donut: donut}, this.renderDonut)
  }

  renderDonut() {
    if (this.state.donut && (this.props.dataSet.length > 0) && this.props.render) {
      let sum = 0;
      this.props.dataSet.map(data => {
        sum += data;
      });
      if (sum >= 0) {
        this.state.donut.create(this.genData());
        this.setState({graphRendered: true});
      }
    }
  }

  updateDonutData() {
    if (this.state.donut && this.state.graphRendered) {
      this.state.donut.update(this.genData());
    } else {
      this.renderDonut();
    }
  }

  genData() {
    let type = [this.props.dataTitle];
    let cat = this.props.category;

    let dataSet = [];

    for (let i = 0; i < type.length; i++) {
      let data = [];
      let total = 0;

      for (let j = 0; j < cat.length; j++) {
        total += this.props.dataSet[j];
        data.push({
          "cat": cat[j],
          "val": this.props.dataSet[j]
        });
      }
      dataSet.push({
        "type": type[i],
        "unitText": this.props.unitText,
        'unit': this.props.unit,
        "data": data,
        "total": total,
        'legendSize': this.props.category.length
      });
    }
    return dataSet;
  }

  render() {
    return <div id={'svgDonutGraph' + this.state.svgID} className='donutGraph' key={this.state.svgID}
                style={{height: '90%', width: '100%'}} ref={node=>this.svg = node}/>;
  }
}
DonutGraph.defaultProps = {
  dataTitle: 'Users',
  graphTitle: 'Blabla',
  unit: numberUnit.singular,
  unitText: '条',
  category: ['触发', '总数',],
  dataSet: [50, 200],
  render: false
};
module.exports = DonutGraph;
export default DonutGraph;