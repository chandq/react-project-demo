// global.rootName = '/dev/';
// if (process.env.APP_CI_PATH) {
//     global.rootName = process.env.APP_CI_PATH;
// }
global.host = window.location.protocol + '//' + window.location.host;
//global.api = 'http://localhost:3000/api'
global.api = window.location.protocol + '//' + window.location.host + '/api';
global.headerType = 'application/json; version=*';
// moment 设置时区
global.locale = 'zh-cn';

if (process.env.NODE_ENV === 'production') {
	global.basename = process.env.PUBLIC_URL
} else {
	global.basename = ''
}

// 弹出会话失效对话框
global.sessionExpired = true;

global.isEmptyObject = function (obj) {
	for (let name in obj) {
		return false;//返回false，不为空对象
	}
	return true;//返回true，为空对象
};

// 判断对象多层嵌套的属性是否存在(如判断obj.a.b.c是否存在：isKeyExists('a.b.c', obj))
global.isKeyExists = (path, obj) => {
	if (Object.prototype.toString.call(obj) !== '[object Object]' || typeof path !== "string") {
		return false;
	}
	let pathList = path.split('.');
	for (var i = 0; i < pathList.length; i++) {
		let key = pathList[i];
		if (!(obj[key])) {
			return false;
		}
		obj = obj[key];
	}
	return true;
};

// load static resource by judge dev or pro environment
global.loadStaticResource = (name) => {
	return `${process.env.NODE_ENV === 'development' ? 'public/' + name : global.basename + '/' + name}`;
};
