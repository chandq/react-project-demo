/**
 * author: chendq
 * Date: 2018/10/21
 * Features:
 */
import React, {Component} from 'react';
import {Layout} from 'antd';
import HexagonalChart from 'components/hexagonalChart/hexagonalChart.js';
const {Sider, Content, Header} = Layout;

const data = [{
	label: 'cdq2',
	state: 'NOT_ALLOCATED',
	vmType: "MANAGED"
},{
	label: 'yyf3',
	state: 'ON',
	vmType: "MANAGED"
},{
	label: 'yyf4',
	state: 'OFF',
	vmType: "MANAGED"
},{
	label: 'yyf5',
	state: 'ON',
	vmType: "MANAGED"
},{
	label: 'cdq4',
	state: 'OFF',
	vmType: "MANAGED"
},{
	label: 'cdq3',
	state: 'ON',
	vmType: "MANAGED"
},{
	label: 'cdqqw4',
	state: 'OFF',
	vmType: "MANAGED"
},{
	label: 'cdq3',
	state: 'ON',
	vmType: "MANAGED"
},{
	label: 'cdq4',
	state: 'OFF',
	vmType: "MANAGED"
}];
class computer extends Component{
	constructor() {
		super();
		this.state = {
			serverwidth: 400,
			serverheight: 300,
		};
	}

	setServer = (obj) => {
		let {width, height} = obj;
		this.setState({serverwidth: width, serverheight: height});
	}

	render() {
		return <div style={{height: '100%', width: '100%', backgroundColor: 'gray'}}>
			<div style={{width: '400px', height: '400px', backgroundColor: 'rgb(53, 53, 53)'}}>
				<svg id="overview_server" width={this.state.serverwidth} height={this.state.serverheight}>
					<HexagonalChart data={data} svgid="overview_server" setHeightWidth={this.setServer}/>
				</svg>
			</div>
		</div>
	}
}

module.exports = computer;