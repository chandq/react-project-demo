/**
 * author: chendq
 * Date: 2018/4/3
 * Features: 时间日期格式化工具
 */
import moment from 'moment';
let time = {
	getDateTime: function (dateTime) {
		return moment(dateTime, 'YYYY-MM-DD HH:mm:ss');
	},
	getTime: function (dateTime) {
		return moment(dateTime, 'HH:mm:ss');
	},
	parseDateTime: function (dateTime) {
		return moment(dateTime).format('YYYY-MM-DD HH:mm:ss');
	},
	parseTime: function (dateTime) {
		return moment(dateTime).format('HH:mm:ss');
	}
}
export default time;
export const getDateTime = time.getDateTime;
export const getTime = time.getTime;
export const parseDateTime = time.parseDateTime;
export const parseTime = time.parseTime;