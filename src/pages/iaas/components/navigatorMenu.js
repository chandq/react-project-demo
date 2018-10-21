/**
 * author: chendq
 * Date: 2018/5/21
 * Features: 左侧导航菜单
 */
import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
import {connect} from 'react-redux';
import {browserHistory, Link} from "react-router";
const style = require('../../../style/app.scss');
let selectMenuKey = '';
const SubMenu = Menu.SubMenu;
class NavigatorMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectMenuKey: 'computer'
		};
	}

	componentDidMount() {
		const {selectMenuKey} = this.state;
		browserHistory.push(`/navroute/iaas/${selectMenuKey}`);
	}

	componentWillReceiveProps(nextProps) {
	}

	menuClick = (item) => {
		this.setState({
			selectMenuKey: item.key
		});
	};

	render() {
		return <Menu
			className="esage-left-menu"
			mode="inline"
			theme="dark"
			onClick={this.menuClick}
			defaultSelectedKeys={[this.state.selectMenuKey]}
			selectedKeys={[this.state.selectMenuKey]}
		>
			<Menu.Item key="computer">
				<span className="icon-node"></span>
				<Link to="/navroute/iaas/computer">计算</Link>
			</Menu.Item>
			<Menu.Item key="storage">
				<span className="icon-layer"></span>
				<Link to="/navroute/iaas/storage">存储</Link>
			</Menu.Item>
			<Menu.Item key="network">
				<span className="icon-service"></span>
				<Link to="/navroute/network">网络</Link>
			</Menu.Item>

		</Menu>
	}
}


function mapStateToProps(state) {
	const {login} = state;
	return {
		login
	}
}
module.exports = connect(mapStateToProps)(NavigatorMenu);
export default NavigatorMenu;