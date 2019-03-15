/**
 * author: chendq
 * Date: 2018/12/29
 * Features: 定义全局消息模块
 */
import EventEmitter from 'events';
let eventEmitter = Object.assign({}, EventEmitter.prototype);
const ajaxStore = {
	emit: (eventName, data) => {
		eventEmitter.emit(eventName, data);
	},
	addEventListener: (eventName, callBack) => {
		eventEmitter.on(eventName, callBack);
	},
	removeEventListener: (eventName, callBack) => {
		eventEmitter.removeListener(eventName, callBack);
	}
};
export default ajaxStore;