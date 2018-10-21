/**
 * Created by gtkrab on 5/3/17.
 */
const uuid = function () {
  let uuid = "", i, random;
  let randomNums = new Uint32Array(32);
  window.crypto.getRandomValues(randomNums);
  for (i = 0; i < 32; i++) {
    random = randomNums[i] % 16;

    if (i === 8 || i === 12 || i === 16 || i === 20) {
      uuid += "-"
    }
    uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
  }
  return uuid;
};
export default uuid;
