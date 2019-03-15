/**
 * author: chendq
 * Date: 2019/3/15
 * Features: 通用的方法
 */

// 封装可以取消异步请求callback的公共方法
const makeCancelable = (promise) => {
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

// download file by href
const downloadFileByLink = (fileName, href) => {
	const link = document.createElement('a');
	const tmpEle = document.body.appendChild(link);
	link.download = fileName;
	link.href = href;
	link.click();
	tmpEle.remove();
};

export default {
	makeCancelable,
	downloadFileByLink
}