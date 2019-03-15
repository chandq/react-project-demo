/**
 * Created by gtkrab on 1/26/16.
 * @desc: 数字、单位的转换处理
 */
let Unit = {
	// convert(1024, unit.MB, 0) => 1 GB
	convert: function (data, index, fixedSize) {
		if (Number.isNaN(fixedSize) || !Number.isSafeInteger(fixedSize)) {
			fixedSize = 2;
		}
		let units = [' Bytes', ' KB', ' MB', ' GB', ' TB', ' PB', ' PB', ' PB'];
		let size = '';
		if (Number.isNaN(data) || !Number.isFinite(data)) {
			return data;
		} else {
			if (data < 1024) {
				size = data + units[index];
			} else if (data < (1024 * 1024)) {
				size = (data / 1024).toFixed(fixedSize) + units[index + 1];
			} else if (data < (1024 * 1024 * 1024)) {
				size = (data / 1024 / 1024).toFixed(fixedSize) + units[index + 2];
			} else if (data < (1024 * 1024 * 1024 * 1024)) {
				size = (data / (1024 * 1024 * 1024)).toFixed(fixedSize) + units[index + 3];
			} else if (data < (1024 * 1024 * 1024 * 1024 * 1024)) {
				size = (data / (1024 * 1024 * 1024 * 1024)).toFixed(fixedSize) + units[index + 4];
			} else {
				size = (data / (1024 * 1024 * 1024 * 1024 * 1024)).toFixed(fixedSize) + units[index + 5];
			}
			return size;
		}
	},
	// convertIO(1024, unit.MB) => {size: 1, unit: 'GB'}
	convertIO: function (data, index) {
		let units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'PB', 'PB'];
		let size = 0;
		let retUnit = '';
		if (Number.isNaN(data) || !Number.isFinite(data)) {
			return {size: data, unit: retUnit};
		} else {
			if (data < 1024) {
				size = data;
				retUnit = units[index];
			} else if (data < (1024 * 1024)) {
				size = (data / 1024);
				retUnit = units[index + 1];
			} else if (data < (1024 * 1024 * 1024)) {
				size = (data / 1024 / 1024);
				retUnit = units[index + 2];
			} else if (data < (1024 * 1024 * 1024 * 1024)) {
				size = (data / 1024 / 1024 / 1024);
				retUnit = units[index + 3];
			} else if (data < (1024 * 1024 * 1024 * 1024 * 1024)) {
				size = (data / 1024 / 1024 / 1024 / 1024);
				retUnit = units[index + 4];
			} else {
				size = (data / (1024 * 1024 * 1024 * 1024 * 1024));
				retUnit = units[index + 5];
			}
			return {size: Number(size), unit: retUnit};
		}
	},
	convertSpeed: function (data, index) {
		let units = [' Bytes/s', ' KB/s', ' MB/s', ' GB/s', ' TB/s', ' PB/s', ' PB/s', ' PB/s'];
		let size = 0;
		let retUnit = '';
		if (Number.isNaN(data) || !Number.isFinite(data)) {
			return {size: data, unit: retUnit};
		} else {
			if (data < 1024) {
				size = data;
				retUnit = units[index];
			} else if (data < (1024 * 1024)) {
				size = (data / 1024);
				retUnit = units[index + 1];
			} else if (data < (1024 * 1024 * 1024)) {
				size = (data / 1024 / 1024);
				retUnit = units[index + 2];
			} else if (data < (1024 * 1024 * 1024 * 1024)) {
				size = (data / 1024 / 1024 / 1024);
				retUnit = units[index + 3];
			} else if (data < (1024 * 1024 * 1024 * 1024 * 1024)) {
				size = (data / 1024 / 1024 / 1024 / 1024);
				retUnit = units[index + 4];
			} else {
				size = (data / (1024 * 1024 * 1024 * 1024 * 1024));
				retUnit = units[index + 5];
			}
			return {size: size, unit: retUnit};
		}
	},
	convertNumber: function (data, index) {
		let units = ['', '万', '亿', '兆', '兆', '兆', '兆'];
		let size = 0;
		let retUnit = '';
		if (Number.isNaN(data) || !Number.isFinite(data)) {
			return {size: data, unit: retUnit};
		} else {
			if (data <= 10000) {
				size = data;
				retUnit = units[index];
			} else if (data <= (10000 * 10000)) {
				size = (data / 10000);
				retUnit = units[index + 1];
			} else if (data <= (10000 * 10000 * 10000)) {
				size = (data / (10000 * 10000));
				retUnit = units[index + 2];
			} else {
				size = (data / (10000 * 10000 * 10000));
				retUnit = units[index + 3];
			}
			return {size: size, unit: retUnit};
		}
	},
	// convertToSpecifiedUnit(1024, unit.MB, unit.GB, 0) => 1
	convertToSpecifiedUnit: function (data, sourceUnitIndex, targetUnitIndex, fixedSize) {
		if (Number.isNaN(fixedSize) || !Number.isSafeInteger(fixedSize)) {
			fixedSize = 2;
		}
		return Number((data * Math.pow(1024, sourceUnitIndex - targetUnitIndex)).toFixed(fixedSize));
	},
	numberUnit: {
		singular: 0,
		tenThousands: 1,
		hundredMillions: 2,
		trillions: 3,
	},
	unit: {
		Bytes: 0,
		KB: 1,
		MB: 2,
		GB: 3,
		TB: 4,
		PB: 5
	}
};
export default Unit;
export const convert = Unit.convert;
export const convertSpeed = Unit.convertSpeed;
export const convertIO = Unit.convertIO;
export const unit = Unit.unit;
export const convertNumber = Unit.convertNumber;
export const numberUnit = Unit.numberUnit;
export const convertToSpecifiedUnit = Unit.convertToSpecifiedUnit;