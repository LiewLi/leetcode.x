/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
  const array = arr.map((v, idx) => [Math.abs(v - x), v]);
  array.sort((a, b) => {
    if (a[0] == b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });
  return array
    .slice(0, k)
    .map(a => a[1])
    .sort((a, b) => a - b);
};

module.exports = findClosestElements;
