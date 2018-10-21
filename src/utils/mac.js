/**
 * Created by gtkrab on 4/25/17.
 */
export const mac = {
  generate(){
    let ret = '';
    let randomNums = new Uint32Array(18);
    window.crypto.getRandomValues(randomNums);
    for (let i = 3; i < 18; i++) {
      if (i % 3 === 0) {
        ret += ':';
      } else {
        ret += Math.floor(randomNums[i] % 16).toString(16);
      }
    }
    return '02'+ret.toLocaleUpperCase();//Force Locally administrated address
  }
};
export default mac;