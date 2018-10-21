/**
 * author: chendq
 * Date: 2018/10/21
 * Features:
 */
import React, {Component} from 'react';
import {Layout} from 'antd';
import NavigatorMenu from "src/pages/iaas/components/navigatorMenu";
const {Sider, Content, Header} = Layout;
const style = require('style/iaasPortal.scss');

class IaasPortal extends Component{
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return <layout className={style.iaasProtal}>
			<Sider className={style.sider}>
				<NavigatorMenu/>
			</Sider>
			<Content className={style.mainContent}>
				{this.props.children}
			</Content>
		</layout>
	}
}
module.exports = IaasPortal;