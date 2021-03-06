/**
 * author: chendq
 * Date: 2018/5/22
 * Features:
 */
import React, {Component} from "react";
import {Layout, Menu, Icon, Select, Dropdown, Button} from "antd";
import {connect} from "react-redux";
import {Link, browserHistory} from "react-router";
import {decrypter} from "../../../utils/crypto";
import {unLogin, login} from "../../login/actions/index";
import {visitConsole} from "../actions/index";
import messages from "src/entry/messages";
import {injectIntl} from 'react-intl';
import Modal from 'components/modal/modal';
const confirm = Modal.confirm;

const style = require('../../../style/app.scss');

const Option = Select.Option;
const {Header} = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class MyHeader extends Component {
	constructor() {
		super();
		this.state={
			selectMenuKey:'overview',
			loginLogoSrc:'../images/logo.svg'
		}
	}
	componentWillMount(){
		// this.setState({selectMenuKey: this.setSelectedMenuKey()});
	}
	componentWillReceiveProps(nextProps) {
	}
	componentWillUnmount(){
	}

	logout = () => {
		confirm({
			title: '注销操作',
			content: '确定要注销么？',
			onCancel: () => {
			},
			onOk: () => {
				this.props.dispatch(unLogin())
			}
		})
	}

	setSelectedMenuKey(){
		console.debug('set hompage:>>>>>>>>>>> ', this.state.selectMenuKey);
		const {location} = window;
		let selectMenuKey;
		if (location.href.indexOf('/navroute/overview') !== -1) {
			selectMenuKey = 'overview'
		} else if (location.href.indexOf('/navroute/iaas') !== -1 ) {
			selectMenuKey = 'iaas'
		} else {
			selectMenuKey = 'overview'
		}
		if(selectMenuKey==='overview'){
			browserHistory.push(`${basename}/navroute/overview`);
		}else{
			browserHistory.push(`${basename}/navroute/${selectMenuKey}`);
		}
		return selectMenuKey
	}

	sets = ({key}) => {
 		if (key == 'setting:3') {
			this.logout()
		}
	}

	showConsole =()=> this.props.dispatch(visitConsole(!this.props.consoleIsShow));

	menuClick=(item)=>{
		if (this.state.selectMenuKey !=item.key) {
			this.setState({
				selectMenuKey: item.key
			});
			// browserHistory.push(`${basename}/navroute/${item.key}`);
		}
	};

	render() {
		const {formatMessage} = this.props.intl;
		const {homepage, component} = messages;
		return <Header id="header" className={style.header}>
			<div className={style.logoContainer}>
				{/*<img src={logo} className={style.logo}/>*/}
			</div>
			<div id="header-account-dropdown-container" className={style.buttons}>
				{/*<Button icon={<Icon type="logout" theme="outlined" />}*/}
				        {/*onClick={this.showConsole}*/}
				        {/*toolTip="任务台"*/}
				        {/*className="esage-console"*/}
				{/*/>*/}
				<span onClick={this.logout} className={style.logout}>
					<Icon type="logout" theme="outlined" style={{fontSize: '20px'}}/>
				</span>
			</div>
			<div className={'header-content ' + style.headerContent}>
				<Menu
					className={style.headerMenu}
					mode="horizontal"
					theme="dark"
					onClick={this.menuClick}
					defaultSelectedKeys={[this.state.selectMenuKey]}
					selectedKeys={[this.state.selectMenuKey]}
				>
					<Menu.Item key="overview">
						<Link to="/navroute/overview">{formatMessage(homepage)}</Link>
					</Menu.Item>
					<Menu.Item key="computer">
						<Link to="/navroute/iaas">{formatMessage(component)}</Link>
					</Menu.Item>
				</Menu>
			</div>
		</Header>
	}
}
function mapStateToProps(state, ownProps) {
	const {login, showConsole} = state;
	return {
		loginData:login.data,
		consoleIsShow: showConsole.consoleIsShow,
	}
}
module.exports = connect(mapStateToProps)(injectIntl(MyHeader));