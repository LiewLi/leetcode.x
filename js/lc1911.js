/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function(nums) {
  let odd = 0;
  let even = 0;
  for (const n of nums) {
    even = Math.max(even, odd + n);
    odd = even - n;
  }
  return even;
};

module.exports = maxAlternatingSum;
