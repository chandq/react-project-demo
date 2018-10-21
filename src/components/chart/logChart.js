/**
 * author: yangke
 * Date: 2017/12/4
 * Features: log图表
 */
import React, { Component } from 'react'
import echarts from 'echarts'
class LogChart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chart: '',
        }
    }

    componentDidMount () {
        const { data: charData, isNull } = this.props
        let node = document.getElementById('logChart')
        var myChart = echarts.init(node);
        setTimeout(()=> {
            console.log("宽，高",getComputedStyle(node.parentNode,null).getPropertyValue("width"), getComputedStyle(node.parentNode,null).getPropertyValue("height"))
            node.style.height = (Number.parseFloat(getComputedStyle(node.parentNode,null).getPropertyValue("height")) - 15) + 'px'
            node.style.width = getComputedStyle(node.parentNode,null).getPropertyValue("width")

            this.chartCreator(myChart, charData, isNull)
        },20)

        this.setState({
            chart: myChart
        })
        window.addEventListener("resize", this.onResize, false);
    }

    componentWillReceiveProps(nextProps) {
        const { data: charData } = nextProps
        if(charData && JSON.stringify(charData) !== JSON.stringify(this.props.data)) {
            this.chartCreator(this.state.chart, charData)
        }
    }

    componentWillUnmount(){
        window.removeEventListener("resize", this.onResize, false);
    }

    onResize =()=> {
        let node = document.getElementById('logChart')
        console.log("llllllllllllllllllog", getComputedStyle(node.parentNode,null).getPropertyValue("height"))
        node.style.height = getComputedStyle(node.parentNode,null).getPropertyValue("height")
        node.style.width = getComputedStyle(node.parentNode,null).getPropertyValue("width")
        this.state.chart && setTimeout(()=> {
            this.state.chart.resize()
        }, 20)
    }

    chartCreator =(chart, charData)=> {
        let xDdata = [], yData = [], yTotal = []
	    if (!(charData && Array.isArray(charData))) {
            return;
	    }
	    charData.forEach(item => {
		    for (let key in item) {
			    xDdata.push(key)
			    yData.push(item[key])
			    yTotal.push(Object.values(item[key]).reduce((pre, next) => {
				    return parseFloat(pre) + parseFloat(next)
			    }, 0))
		    }
	    })
        let isNull = JSON.stringify([0,0,0,0,0,0,0,0,0,0]) === JSON.stringify(yTotal)
        console.log("是否有数据",isNull, yTotal)

        let option = {
            title: {
                text: '近10天日志信息',
                right: 10,
                textStyle: {
                    color: '#fff',
                    fontWeight: 'normal',
                    fontSize: 14
                }
            },
            tooltip: {
            },
            xAxis: {
                data: xDdata.map(_=> {return _.substr(5) }),
                axisLabel: {
                    interval: 0,
                    inside: false,
                    textStyle: {
                        color: '#a4a4a4',
                        fontSize:10,
                        fontWeight:'normal'
                    },
                    rotate: 45
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                z: 10
            },
            yAxis: {
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#999'
                    }
                },
                splitLine:{show: false},//去除网格线
                minInterval: 1,
                data: isNull ? [1,2,3,4,5]: null
            },
            series: [
                {
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#029bfb'},
                                    {offset: 1, color: '#29fee8'}
                                ]
                            )
                        },
                        emphasis: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#029bfb'},
                                    {offset: 1, color: '#29fee8'}
                                ]
                            )
                        }
                    },
                    data: isNull ? [] : yTotal,
                    tooltip: {
                        formatter: function (params, ticket, callback) {
                            let findObj = charData.find(_=> {
                                let key = Object.keys(_)[0]
                                if(key.endsWith(params.name)) {
                                    return  _[key]
                                }
                            })
                            console.log("444444444444444444444444444444444444",findObj)
                            let name = params.name.split('-')
                            let result = `${name[0]}月${name[1]}日`+'<br/>';
                            if(findObj) {
                                let target = Object.values(findObj)[0]
                                for(let key in target) {
                                    let _key
                                    switch (key.toUpperCase()) {
                                        case 'INFO':
                                            _key = "正常"
                                            break
                                        case 'WARN':
                                            _key = '警告'
                                            break
                                        case 'ERROR':
                                            _key = '严重'
                                            break
                                    }
                                        result += _key +' : '+ target[key] +'</br>';
                                }
                            }
                            return result
                        }
                    }
                },
            ]
        };
        chart.setOption(option)
    }

    render() {
        return <div id="logChart" style={{ height: '100%',minWidth: '100px',paddingBottom:'10px',marginLeft:'5px'}}></div>
    }
}

export default LogChart