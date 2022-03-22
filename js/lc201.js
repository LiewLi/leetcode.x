/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
  let c = 0;
  let ret = 0;
  for (let i = 0; i < 32; ++i) {
    const t = 1 << i;
    if (m & t) {
      if (m + c + 1 > n) {
        ret |= t;
      }
    } else {
      c |= t;
    }
  }
  return ret;
};

console.log(rangeBitwiseAnd(5, 7));
