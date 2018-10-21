/**
 * author: yangke
 * Date: 2018/1/16
 * Features: 表格以excel导出
 */

const tableToExcel = (function () {
	const uri = 'data:application/vnd.ms-excel;base64,',
		template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">'
			+ '<head><meta http-equiv="Content-type" content="text/html;charset=UTF-8" /><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/>'
			+ '</x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
		base64 = function (s) {
			return window.btoa(unescape(encodeURIComponent(s)))
		},
		format = function (s, c) {
			return s.replace(/{(\w+)}/g, function (m, p) {
				return c[p];
			})
		};

	return function (table, name) {
		// issues: CLOUD-520，解决用office Excel查看显示img标签错误的问题 --by chandq
		let newTable = table.slice();
		for (let i = 0; i < newTable.length; i++) {
			if (newTable[i].querySelector('tbody')) {
				let imgList = newTable[i].querySelector('tbody').querySelectorAll('img');
				if (imgList.length > 0) {
					Array.from(imgList).forEach(ele => {
						ele.parentNode.removeChild(ele);
					})
				}
			}
		}
		let innerH = '';
		if (Array.isArray(newTable)) {
			newTable.forEach(t => innerH += t.innerHTML)
		} else {
			innerH = newTable.innerHTML
		}
		var ctx = {
			worksheet: name || 'Worksheet',
			table: innerH
		}
		return uri + base64(format(template, ctx));
	}
})();

export default tableToExcel