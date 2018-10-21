
let regExp = {
    ip: new RegExp('^(((\\d{1,2})|(1\\d{2})|(2[0-4]\\d)|(25[0-5]))\\.){3}((\\d{1,2})|(1\\d{2})|(2[0-4]\\d)|(25[0-5]))$'),
    port: new RegExp('^([0-9]|[1-9]\\d{1,3}|[1-5]\\d{4}|6[0-5]{2}[0-3][0-5])$')
}
export const checkIP = regExp.ip
export const checkPort = regExp.port
export default regExp