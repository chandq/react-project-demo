/**
 * author: chendq
 * Date: 2018/10/21
 * Features:
 */
import React, {Component} from 'react';
import {Layout} from 'antd';
const {Sider, Content, Header} = Layout;

class storage extends Component{
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return <div style={{height: '100%', width: '100%', backgroundColor: 'gray'}}>存储面板</div>
	}
}

module.exports = storage;