/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
  let d = 1;
  let len = 0;
  let n = low;
  while (n) {
    len++;
    n = Math.floor(n / 10);
  }

  const ret = [];

  const _ = (d, len) => {
    let v = 0;
    for (let i = d; i < d + len; ++i) {
      v = 10 * v + i;
    }
    return v;
  };

  let v = _(d, len);
  while (v <= high) {
    if (v >= low) {
      ret.push(v);
    }
    d++;
    if (d + len > 10) {
      len++;
      d = 1;
    }
    v = _(d, len);
  }
  return ret;
};

console.log(sequentialDigits(1000, 13000));
