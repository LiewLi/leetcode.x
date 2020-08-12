/**
 * @param {string} target
 * @return {number}
 */
var minFlips = function(target) {
  let ret = 0;
  let s = 0;
  for (let i = 0; i < target.length; ++i) {
    const v = +target[i];
    if ((s + v) % 2 == 0) {
      continue;
    } else {
      s++;
      ret++;
    }
  }
  return ret;
};
