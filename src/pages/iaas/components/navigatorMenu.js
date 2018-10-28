/**
 * author: chendq
 * Date: 2018/5/21
 * Features: 左侧导航菜单
 */
import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
import {connect} from 'react-redux';
import {browserHistory, Link} from "react-router";
import messages from "src/entry/messages";
import {injectIntl} from 'react-intl';
const style = require('../../../style/app.scss');
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
		const {formatMessage} = this.props.intl;
		const {compute, storage, network} = messages;
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
				<Link to="/navroute/iaas/computer">{formatMessage(compute)}</Link>
			</Menu.Item>
			<Menu.Item key="storage">
				<span className="icon-layer"></span>
				<Link to="/navroute/iaas/storage">{formatMessage(storage)}</Link>
			</Menu.Item>
			<Menu.Item key="network">
				<span className="icon-service"></span>
				<Link to="/navroute/network">{formatMessage(network)}</Link>
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
module.exports = connect(mapStateToProps)(injectIntl(NavigatorMenu));
export default NavigatorMenu;