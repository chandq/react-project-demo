import {XlsExport} from "src/utils/exportAsExcel";
let status = {
    waiting: true,
    started: false,
    done: false
};
function updateStatus(statusName, value){
    status={
        waiting: true,
        started: false,
        done: false
    };
    status[statusName] = value;
}
postMessage(status);

onmessage = function(e){
    if(e.data.start){
        let xls = new XlsExport(e.data.data, e.data.title);
        xls.exportToXLS();
        postMessage({data: xls.getExcelData, done: true});
        close();
    }else if(e.stop){
        close();
    }
};