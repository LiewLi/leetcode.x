/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
  let left = 0;
  let right = Math.floor(Math.sqrt(c));
  while (left <= right) {
    const cur = left * left + right * right;
    if (cur == c) return true;
    else if (cur < c) {
      left += 1;
    } else {
      right -= 1;
    }
  }
  return false;
};

module.exports = judgeSquareSum;
