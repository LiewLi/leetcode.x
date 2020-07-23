/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
  let ret = 0;
  for (let i = 0; i < 32; ++i) {
    const _a = a & (1 << i) ? 1 : 0;
    const _b = b & (1 << i) ? 1 : 0;
    if (c & (1 << i)) {
      ret += _a || _b ? 0 : 1;
    } else {
      ret += _a + _b;
    }
  }
  return ret;
};

console.log(minFlips(2, 6, 5));
