import {message, notification} from "antd";
import {browserHistory} from 'react-router';
import {encrypter} from "src/utils/crypto";
export const LOGIN = 'LOGIN'
export const UN_LOGIN = 'UN_LOGIN'
export const CHECK_PASSWORD = 'CHECK_PASSWORD';
export const FETCH_LANGUAGE = 'FETCH_LANGUAGE';
export const START_OR_END_PENDING = 'START_OR_END_PENDING';

export function loginPost(json) {
	return {
		type: LOGIN,
		data: json
	}
}

function unLoginPost() {
	return {
		type: UN_LOGIN
	}
}

function passwordValid({pwdValid, loading=false, overdue='', errorMessage=''}) {
	return {
		type: CHECK_PASSWORD,
		pwdValid,
		loading,
		overdue,
		errorMessage
	}
}

function pending({loading}) {
	return {
		type: START_OR_END_PENDING,
		loading,
	}
}

export function language(value) {
	return {
		language: value,
		type: 'FETCH_LANGUAGE'
	}
}

export function login({username, password, remember}) {
	return dispatch => {
		dispatch(pending({loading: true}));
		setTimeout(() => {
			if (username=='admin' && password == 'admin') {
				dispatch(passwordValid({pwdValid: true, loading: false}));
				dispatch(loginPost({id: 1}));
			} else {
				dispatch(passwordValid({pwdValid: false, loading: false}));
			}
		}, 1000);
		// const queryStr = `grant_type=password&username=${username}&password=${password}`;
		// return fetch(`${api}/oauth2/token/`, {
		// 	method: 'POST',
		// 	headers: {
		// 		'Accept': headerType,
		// 		'Content-Type': 'application/x-www-form-urlencoded',
		// 	},
		// 	body: queryStr
		// }, dispatch).then(data => {
		// 	if (data['access_token']) {
		// 		sessionStorage.authorization = `Bearer ${data['access_token']}`;
		// 		sessionStorage.username = encrypter(username);
		// 		sessionStorage.password = encrypter(password);
		// 		remember ? sessionStorage.remember = true : sessionStorage.removeItem('remember');
		// 		dispatch(pwdError(true));
		// 		dispatch(loginPost(data));
		// 	} else {
		// 		dispatch(pwdError(false));
		// 	}
		//
		// }).catch((err, response) => {
		//
		//  dispatch(passwordValid({pwdValid: false, loading: false}));
		// })
	}
}

// 修改密码

export function modify({value}) {
	return dispatch => {
		// const values = {
		// 	'name': value.name,
		// 	'password': value.revisePassword
		// }
		// const str = btoa(`${value.name}:${value.Password}`);
		// console.log(values, '44444444444444444444444444444')
		// return fetch(`${api}/login`, {
		// 	method: 'POST',
		// 	headers: {
		// 		'Accept': 'application/vnd.esage.resetPwd+json;version=3.0',
		// 		'Content-Type': 'application/vnd.esage.resetPwd+json;version=3.0',
		// 		"Authorization": "Basic " + str
		// 	},
		// 	body: JSON.stringify(values),
		// }).then(data => {
		// 	notification.success({
		// 		message: '修改密码',
		// 		description: '修改密码成功',
		// 	});
		//
		// }).catch(err => {
		// 	console.log(err, '1111111111111111111')
		// 	notification.error({
		// 		message: '修改密码失败',
		// 		description: err.message,
		// 	});
		// });
	}
}

export function resetPwdValid() {
	return dispatch => {
		dispatch(passwordValid({pwdValid: true}));
	}
}

export function unLogin() {
	return dispatch => {
		dispatch(unLoginPost())
		browserHistory.replace(`${basename}/login`);
		// const data = {
		// 	bypassInterceptor: true,
		// 	timeout: 2000,
		// 	withCredentials: true
		// }
		// return fetch(`${api}/`, {
		// 	method: 'GET',
		// 	headers: {
		// 		'Accept': 'application/json',
		// 		'Content-Type': 'application/json'
		// 	}
		// }).then(data => {
		// 	browserHistory.replace(`${basename}/login`);
		// 	dispatch(unLoginPost());
		// 	if (!sessionStorage.remember) {
		// 		sessionStorage.removeItem("username");
		// 		sessionStorage.removeItem("password");
		// 	}
		// }).catch(err => {
		// 	message.error(err.message)
		// });
	}
}
