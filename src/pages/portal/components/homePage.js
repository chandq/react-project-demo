import React, {Component} from "react";
import {connect} from "react-redux";
import {browserHistory} from "react-router";
import {Layout, Breadcrumb, Spin, Icon} from "antd";
import {decrypter} from "../../../utils/crypto";
import MyHeader from "./myHeader";
import ErrorBoundary from 'components/errorBoundary/ErrorBoundary';
import Console from './console'

const style = require('../../../style/app.scss');
const {Sider, Content, Header} = Layout

class HomePage extends Component {
	constructor(props, context) {
		super(props, context)

		this.state = {
			menuName: '',
			parentMenuName: ''
		}
	}

	async componentWillMount() {
		// const {user, dispatch} = this.props;
		// let loginDataStr = sessionStorage.getItem('loginData');
		// if (user.id == 0 && loginDataStr) {
		// 	try {
		// 		// let data = await _checkIsLogin();
		// 		// console.log("_checkIsLogin: ", data);
		// 		// if (data && data.id) {
		// 		// 	sessionStorage.setItem('loginData', JSON.stringify(data));
		// 		// }
		// 	} catch (e) {
		// 		browserHistory.push(`${basename}/login`);
		// 	}
		// }
	}

	render() {
		return (
			<Layout className={style.homePage}>
				<MyHeader/>
				<Layout className={style.panel}>
					<Content className={style.main}>
						<ErrorBoundary>
							{this.props.children || <div></div>}
						</ErrorBoundary>
					</Content>
				</Layout>
				{/*<Console/>*/}
			</Layout>
		)
	}
}

function mapStateToProps(state, ownProps) {
	const {login,} = state;
	return {
		user: login.user
	}
}

module.exports = connect(mapStateToProps)(HomePage);
// export default HomePage;
