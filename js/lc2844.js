/**
 * @param {string} num
 * @return {number}
 */
var minimumOperations = function(num) {
  num = num.split("").map(a => a.charCodeAt(0) - "0".charCodeAt(0));
  let res = num.length;
  const hasZero = num.some(a => a == 0);
  if (hasZero) res = num.length - 1;
  for (let i = 0; i < num.length; ++i) {
    for (let j = i + 1; j < num.length; ++j) {
      const v = num[i] * 10 + num[j];
      if (v % 25 == 0) {
        res = Math.min(res, num.length - i - 2);
      }
    }
  }
  return res;
};

module.exports = minimumOperations;
