/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function(x, y, bound) {
  const _pow = n => {
    if (n <= 1) {
      return 0;
    }
    let k = 0;
    let m = 1;
    while (m <= bound) {
      ++k;
      m *= n;
    }
    return k;
  };
  const maxX = _pow(x);
  const maxY = _pow(y);
  let res = new Set();
  for (let i = 0; i <= maxX; ++i) {
    for (let j = 0; j <= maxY; ++j) {
      const v = Math.pow(x, i) + Math.pow(y, j);
      if (v <= bound && !res.has(v)) {
        res.add(v);
      }
    }
  }
  res = [...res];
  res.sort((a, b) => a - b);
  return res;
};

module.exports = powerfulIntegers;
