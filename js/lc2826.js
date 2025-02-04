/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
  let res = nums.length;
  for (let i = 0; i <= nums.length; ++i) {
    for (let j = i; j <= nums.length; ++j) {
      let cnt = 0;
      for (let k = 0; k < nums.length; ++k) {
        if (k >= 0 && k < i) cnt += nums[k] != 1 ? 1 : 0;
        if (k >= i && k < j) cnt += nums[k] != 2 ? 1 : 0;
        if (k >= j && k < nums.length) cnt += nums[k] != 3 ? 1 : 0;
      }
      res = Math.min(res, cnt);
    }
  }
  return res;
};

module.exports = minimumOperations;
