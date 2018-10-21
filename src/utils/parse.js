/**
 * Created by gtkrab on 4/8/16.
 */
let parse = {
  parseID: function (url) {
    let index = url.lastIndexOf('/');
    return parseInt(url.substr(index + 1), 10);
  },
  parseLink: function (key, links, likeFlag) {
    for (let i = 0; i < links.length; i++) {
      if (links[i].rel === key) {
        return links[i];
      }
    }
    return null;
  },
    replaceLink: function (key, links, link){
      let ret = links.slice();
      if(Array.isArray(ret)){
          for(let i=0; i<ret.length;i++){
              if(ret[i].rel===key){
                  ret[i] = link;
                  break;
              }
          }
      }
      return ret;
    },
  parseVMNICLinks: function (links){
    let ret = [];
    for (let i = 0; i < links.length; i++) {
      if (links[i].rel.includes('nic') && !links[i].rel.includes('nics')) {
        ret.push(Object.assign({}, links[i]));
      }
    }
    return ret;
  },
  parseTimeString: function (timestamp, format) {
    let t = new Date(Date.parse(timestamp));
    if(format){
      return t.toLocaleString(format);
    }else{
      return t.toLocaleString('zh-Hans-CN');
    }
  },
  calculateTime(timeInMilliseconds){
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let ret = '';
    days = Math.floor(timeInMilliseconds/(24*60*60*1000));
    hours = Math.floor((timeInMilliseconds-(days*(24*60*60*1000)))/(60*60*1000));
    minutes = Math.floor((timeInMilliseconds-(days*(24*60*60*1000))-(hours*(60*60*1000)))/(60*1000));
    if(days){
      ret+=days.toString()+'天 ';
    }
    if(hours){
      ret+=hours.toString()+'小时 ';
    }
    ret+=minutes.toString()+'分钟';
    return ret;
  }
};
export const parseID = parse.parseID;
export const parseLink = parse.parseLink;
export const replaceLink = parse.replaceLink;
export const parseVMNICLinks = parse.parseVMNICLinks;
export const parseTimeString = parse.parseTimeString;
export const calculateTime = parse.calculateTime;
// export default parse;
