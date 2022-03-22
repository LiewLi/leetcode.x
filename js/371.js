/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  let c = 0;
  let ret = 0;
  for (let i = 0; i < 32; ++i) {
    const a1 = a & (1 << i);
    const a2 = b & (1 << i);

    if (a1 && a2) {
      ret |= c << i;
      c = 1;
    } else if (a1 || a2) {
      if (!c) {
        ret |= 1 << i;
      }
    } else {
      ret |= c << i;
      c = 0;
    }
  }
  return ret;
};

console.log(getSum(1, 2));
