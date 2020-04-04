/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function(lo, hi, k) {
  const _ = n => {
    let k = 0;
    while (n !== 1) {
      k++;
      if (n % 2 == 0) n /= 2;
      else n = 3 * n + 1;
    }
    return k;
  };

  const vals = [];
  for (let i = lo; i <= hi; ++i) {
    vals.push([_(i), i]);
  }
  return vals.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]))[
    k - 1
  ][1];
};

console.log(getKth(12, 15, 2));
