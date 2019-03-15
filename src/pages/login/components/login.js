import React, {Component} from "react";
import PropTypes from "prop-types";
import {browserHistory} from "react-router";
import {connect} from "react-redux";
import messages from "../../../entry/messages";
import {Button, Checkbox, Form, Input, Row, Select, notification} from "antd";
import user from "../../../style/img/yonghu.png";
import password from "../../../style/img/mima.png";
import {encrypter, decrypter} from "src/utils/crypto";
import {login, resetPwdValid, language, modify} from "../actions/index";
import {injectIntl, formatMessage, defineMessages} from 'react-intl';

const FormItem = Form.Item;
const style = require('../../../style/login.scss');

class Login extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			username: '',
			password: '',
			remember: false,
			visible: false,
			modalKey: Math.random(),
            loginLogoSrc:'images/github.png'
		}
	}

	componentWillMount() {
		// this.props.dispatch(language('CN'));
	}

	componentDidMount() {
		if (sessionStorage.remember === 'true') {
			this.props.form.setFieldsValue({
				password: decrypter(sessionStorage.password),
				username: decrypter(sessionStorage.username),
			});
			this.setState({remember: true})
		}
	}

	componentDidUpdate() {

	}

	componentWillReceiveProps(nextProps) {

		const {loginData, token, overdue} = nextProps
		const {remember} = this.state;
		if (loginData.id) {//登陆成功
			browserHistory.push(`${basename}`);
		} else {
		}
	}

	loginPost = () => {
		const {validateFieldsAndScroll} = this.props.form;
		validateFieldsAndScroll((errors, values) => {
			if (errors) {
				return
			}
			this.props.dispatch(login(values));
		})
	}

	closeErrorTip = () => {
		if (!this.props.pwdValid) {
			this.props.dispatch(resetPwdValid(true));
		}
	};

	/**选择语言开始**/
	handleChange = (value) => {
		console.log('handleChange');
		console.log(`selected ${value}`);
		this.props.dispatch(language(value));
	};
	/**选择语言结束**/

	render() {
		const {getFieldDecorator, getFieldsError} = this.props.form;
		const {formatMessage} = this.props.intl;
		const {loginUserName, loginPassword, choiceLanguage, login, rememberPassword, chineseOption, englishOption} = messages;
		return (
			<div className={style.login}>
				<div className={style.content}>
					<div className={style.logo}>
						<img alt='logo' src={this.state.loginLogoSrc}/>
					</div>
					<form>
						<FormItem className={style.label} label={formatMessage(loginUserName)} hasFeedback>
							{getFieldDecorator('username', {
								rules: [
									{
										required: true, message: '用户名不能为空'
									},
								],
							})(<Input size="large" className={style.input} prefix={<img src={user}/>}
									  onPressEnter={this.loginPost}/>)}
						</FormItem>
						<FormItem className={style.label} label={formatMessage(loginPassword)} hasFeedback>
							{getFieldDecorator('password', {
								rules: [
									{
										required: true, message: '密码不能为空'
									}
								],
							})(<Input size="large" className={style.input} prefix={<img src={password}/>}
									  type="password"
									  onPressEnter={this.loginPost} onChange={this.closeErrorTip}/>)}
						</FormItem>
						<FormItem className={style.label} label={formatMessage(choiceLanguage)} hasFeedback>
							<Select
								defaultValue="中文"
								className={`loginSelectInput ${style.input}`} ant-select-selection__rendered
								optionFilterProp="children"
								onChange={this.handleChange}
							>
								<Select.Option value="CN">{formatMessage(chineseOption)}</Select.Option>
								<Select.Option value="EN">{formatMessage(englishOption)}</Select.Option>
							</Select>
						</FormItem>
						<Row>
							<Button id="sumbitBtn" type="primary" className={`login-button ${style.loginButton}`}
									onClick={this.loginPost} size="large"
									loading={this.props.loading}>
								{formatMessage(login)}
							</Button>
							<div style={{display: this.props.pwdValid ? "none" : "block"}}
								 className={style.passwordError}>用户名或密码无效，请重新输入
							</div>
						</Row>
						<FormItem className={`rememberItem ${style.rememberItem}`}>
							{getFieldDecorator('remember', {
								initialValue: this.state.remember,
								valuePropName: 'checked',
							})(<Checkbox className={style.checkbox}>{formatMessage(rememberPassword)}</Checkbox>)}
						</FormItem>
					</form>
					<p><span>*</span>建议使用谷歌最新版本浏览器</p>
				</div>
			</div>
		)
	}
}

Login.defaultProps = {
	pwdValid: true,
};
Login.propTypes = {
	pwdValid: PropTypes.bool
}

Login = Form.create()(Login);

function mapStateToProps(state, ownProps) {
	const {login, showLoad} = state;
	return {
		loginData: login.data,
		pwdValid: login.pwdValid,
		loading: login.loading,
	}
}

// Login.propTypes = {
//     intl: PropTypes.object.isRequired,
// };
module.exports = connect(mapStateToProps)(injectIntl(Login));
export default Login;

