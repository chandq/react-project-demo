/**
 * author: chendq
 * Date: 2018/10/21
 * Features:
 */
import React, {Component} from 'react';
import {Layout} from 'antd';
const {Sider, Content, Header} = Layout;

class computer extends Component{
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return <div style={{height: '100%', width: '100%', backgroundColor: 'gray'}}>计算面板</div>
	}
}

module.exports = computer;