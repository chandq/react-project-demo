const oldFetchfn = require('isomorphic-fetch');
// const showLoading = require('components/portal/actions').showLoading
const Modal = require('antd/lib/modal');
const info = Modal.info
export const fetch = (options, dispatch) => {
	// if(typeof dispatch === 'function'){
	//     dispatch(showLoading(true))
	// }
	let {
		method = 'get',
		data,
		url,
		responseType = 'json'
	} = options;
	Object.assign(options, {
		// credentials: 'include',
		timeout: '30000',
	});
	!!sessionStorage.authorization && (options.headers.Authorization = sessionStorage.authorization);
	if (data !== undefined && typeof data === 'object') {
		url = appendArguments(url, data)
	}
	delete options.data;
	delete options.url;
	delete options.responseType;
	let fetchPromise = null;
	if (responseType === 'json') {
		fetchPromise = oldFetchfn(url, options).then(response => {
			return checkStatus(response, dispatch)
		}, response => checkNetwork(response, dispatch)).then(parseJSON);
	} else if (responseType == 'text') {
		fetchPromise = oldFetchfn(url, options).then(response => {
			// console.log("fetch-->", response)
			return checkStatus(response, dispatch)
		}, response => checkNetwork(response, dispatch)).then(parseText);
	}
	// timoout 处理
	let timeoutPromise = new Promise(function (resolve, reject) {
		setTimeout(() => {
			reject(new Error("网络请求超时"))
		}, options.timeout)
	});
	return Promise.race([fetchPromise, timeoutPromise])
}

const download = (options) => {
	let {
		method = 'get',
		data,
		url,
		fileName = 'demo'
	} = options;
	Object.assign(options, {
		// credentials: 'include',
		timeout: '30000',
	});
	!!sessionStorage.authorization && (options.headers.Authorization = sessionStorage.authorization);
	if (data !== undefined && typeof data === 'object') {
		url = appendArguments(url, data)
	}
	delete options.data;
	delete options.url;
	delete options.responseType;
	return oldFetchfn(url, options).then(res => res.blob().then(blob => {
		var a = document.createElement('a');
		var url = window.URL.createObjectURL(blob);   // 获取 blob 本地文件连接 (blob 为纯二进制对象，不能够直接保存到磁盘上)
		// var filename = fileName;
		a.href = url;
		a.download = fileName;
		a.click();
		// window.URL.revokeObjectURL(url);
		// document.querySelector('#status').innerHTML = '下载完成';
	}))
};

/*
* param {String} action 的类型
* param {Object}
* */
export function actionCreator(type, data = {}) {
	return Object.assign({type: type}, {...data})
}

/*
* param {String} 请求路径url
* param {Object} 参数
* return {String} 拼接参数的路径
* */
export function appendArguments(url, payload = {}) {
	let args = Object.keys(payload)
	if (args.length === 0) {
		return url
	}
	if (url.includes('?')) {
		url = url + '&'
	} else {
		url = url + '?'
	}
	args.forEach(item => {
		let value = payload[item]
		if (value !== undefined) {
			url += `${item}=${payload[item]}&`
		}
	})
	return url.substr(0, url.length - 1)
}

function checkStatus(response, dispatch) {
	const headers = response.headers
	const authenticate = headers.get('www-authenticate');
	if (response.status >= 200 && response.status < 300) {
		return response
	}
	let error;
	const {host, basename, throwFetchedError} = global;
	if (response.status === 401) {
		let decoder = new TextDecoder();
		let reader = response.body.getReader()
		reader.read().then(function processResult(result) {
			if (result.done) return;
			let responseText = decoder.decode(result.value, {stream: true});
			let responseObj = '';
			try {
				responseObj = JSON.parse(responseText);
			} catch (err) {
				throwFetchedError(err, responseText);
				console.error("checkStatus：", responseText);
			}
			if ('invalid_token' == responseObj.error && 'Invalid token passed' == responseObj.error_description) {
				window.location.href = host + `${basename}/login`;
			}
			if (responseObj.detail) {	// 未提供token
				error = new Error(responseObj.detail);
			} else {
				error = new Error(responseObj.error + ':  ' + responseObj.error_description);
			}
			throwFetchedError(error, response);
		});
		error = new Error('禁止访问');
		throwFetchedError(error, response)
	} else {
		let decoder = new TextDecoder();
		let reader = response.body.getReader()
		return reader.read().then(function processResult(result) {
			if (result.done) return;
			let responseText = decoder.decode(result.value, {stream: true});
			let responseObj = '';
			try {
				responseObj = JSON.parse(responseText);
			} catch (err) {
				throwFetchedError(err, responseText);
				console.error("checkStatus：", responseText);
			}
			error = new Error(responseObj.error + ':  ' + responseObj.error_description);
			throwFetchedError(error, response);
		});
	}
}

function checkNetwork(response, dispatch) {
	console.error("checkNetwork: ", response)
	const error = new Error('请检查网络')
	throw error
}

// 解析后台返回JSON格式的数据
function parseJSON(response) {
	try {
		if (response.status == 204) {
			return response
		} else {
			return response.json();
		}
	} catch (e) {
		return response
	}
}

// 解析后台返回普通字符串的数据
function parseText(response) {
	try {
		if (response.status == 204) {
			return response
		} else {
			return response.text();
		}
	} catch (e) {
		return response
	}
}

export default fetch;
export const downloadFile = download;
