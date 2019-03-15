const oldFetchfn = require('isomorphic-fetch');
const Modal = require('antd/lib/modal');
const info = Modal.info;

const throwFetchedError = (error, response) => {
	if (Object.prototype.toString.call(response) === '[object Object]') {
		error.message = response
	}
	throw error
}

const parseHTMLErrMessage = function (response) {
// 对后台返回HTML数据格式的错误信息进行解析，并返回
	return response.text().then((responseHtml) => {
		// responseHtml = response.text();
		return new Promise((resolve, reject) => {
			let errorMessageDiv = document.getElementById('errorMessageDiv');
			if (!errorMessageDiv) {
				errorMessageDiv = document.createElement('div');
				errorMessageDiv.id = 'errorMessageDiv';
				errorMessageDiv.style.display = 'none';
				errorMessageDiv.innerHTML = responseHtml;
				Array.from(errorMessageDiv.querySelectorAll('style')).forEach(ele => {
					ele.parentNode.removeChild(ele);
				});
				document.body.appendChild(errorMessageDiv);
			} else {
				errorMessageDiv.innerHTML = responseHtml;
				Array.from(errorMessageDiv.querySelectorAll('style')).forEach(ele => {
					ele.parentNode.removeChild(ele);
				});
			}
			let message = Array.from(errorMessageDiv.querySelectorAll('p'))[1].querySelector('u').textContent;
			reject(new Error(message));
		})
	});
};
const checkStatus = function (response, dispatch) {
	console.debug('config.js checkStatus -> origin response: ', response);
	const headers = response.headers;
	let error;
	const authenticate = headers.get('www-authenticate')
	if (authenticate && (authenticate === 'Authentication Invalid' || authenticate === 'Basic realm="Esage Api"') && window.location.href.indexOf('/login') === -1 && global.sessionExpired) {
		global.sessionExpired = false;
		sessionStorage.clear();
		parseHTMLErrMessage(response).then().catch(err => {
			info({
				title: err.message !== 'Full authentication is required to access this resource' ? err.message : '会话超时，请重新登录',
				onOk() {
					global.sessionExpired = true;
					window.location.href = window.location.protocol + '//' + window.location.host + `${basename}/login`
				},
			});
		});
	} else if (response.status >= 200 && response.status < 300) {
		return response
	} else if (response.status === 403 || response.status === 401) {
		try {
			return parseHTMLErrMessage(response);
		} catch (e) {
			error = new Error('禁止访问');
			throwFetchedError(error, response);
		}
	} else if (response.status >= 500) {
		error = new Error(response.status);
		throwFetchedError(error, response)
	} else {
		let decoder = new TextDecoder();
		let reader = response.body.getReader();
		return reader.read().then(function processResult(result) {
			if (result.done) return
			let responseText = decoder.decode(result.value, {stream: true});
			let responseObj = JSON.parse(responseText);
			error = new Error(responseObj.collection[0].message);
			throwFetchedError(error, response)
		})
	}
}
const checkNetwork = function () {
	throw new Error('请检查网络');
}
const parseJSON = function (response) {
	try {
		if (response.status === 204) {
			return response
		} else {
			return response.json()
		}
	} catch (e) {
		return response
	}
}

global.fetch = function (input, opts, dispatch) {
	// if(typeof dispatch === 'function'){
	//   dispatch(showLoading(true))
	// }
	opts.credentials = 'include';
	opts.timeout = '30000';
	let fetchPromise = oldFetchfn(input, opts).then(response => checkStatus(response, dispatch), response => checkNetwork(response, dispatch)).then(parseJSON)
	// timoout 处理
	let timeoutPromise = new Promise(function (resolve, reject) {
		setTimeout(() => {
			reject(new Error("网络请求超时"))
		}, opts.timeout)
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
		let a = document.createElement('a');
		let url = window.URL.createObjectURL(blob);   // 获取 blob 本地文件连接 (blob 为纯二进制对象，不能够直接保存到磁盘上)
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
		let value = payload[item];
		if (value !== undefined) {
			url += `${item}=${payload[item]}&`
		}
	});
	return url.substr(0, url.length - 1)
}

export const downloadFile = download;