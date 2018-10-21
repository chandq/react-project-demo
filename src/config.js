// global.rootName = '/esagecloud/';
// if (process.env.APP_CI_PATH) {
//     global.rootName = process.env.APP_CI_PATH;
// }
global.host =  window.location.protocol+'//'+window.location.host;
//global.api = 'http://localhost:3000/api'
global.api = window.location.protocol+'//'+window.location.host+ '/api'
global.headerType = 'application/json; version=*';
// moment 设置时区
global.locale = 'zh-cn';

if(process.env.NODE_ENV === 'production'){
  global.basename = process.env.PUBLIC_URL
}else{
  global.basename = ''
}

global.throwFetchedError=(error,response)=>{
	if (Object.prototype.toString.call(response) == '[object Object]') {
		error.message = response
	}
  throw error
}

const Modal = require('antd/lib/modal')
const info = Modal.info

// 封装可以取消异步请求callback的公共方法
global.makeCancelable = (promise) => {
	let hasCanceled_ = false;

	const wrappedPromise = new Promise((resolve, reject) => {
		promise.then((val) =>
			hasCanceled_ ? reject({isCanceled: true}) : resolve(val)
		);
		promise.catch((error) =>
			hasCanceled_ ? reject({isCanceled: true}) : reject(error)
		);
	});

	return {
		promise: wrappedPromise,
		cancel() {
			hasCanceled_ = true;
		},
	};
};

global.clientWidth = document.documentElement.clientWidth
global.clientHeight = document.documentElement.clientHeight

global.isEmptyObject = function(obj) {
  for (var name in obj){
    return false;//返回false，不为空对象
  }
  return true;//返回true，为空对象
}
