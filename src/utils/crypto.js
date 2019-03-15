var CryptoJS = require("crypto-js");
var key = 'openSource'
// Encrypt
export function encrypter(str = '', secret = key) {
  return CryptoJS.AES.encrypt(str.toString(), secret)
}

// Decrypt
export function decrypter(str = '', secret = key) {
  let bytes  = CryptoJS.AES.decrypt(str.toString(), secret);
  return bytes.toString(CryptoJS.enc.Utf8)
}
