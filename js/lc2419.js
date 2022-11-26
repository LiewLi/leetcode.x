/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
  if (nums.length <= 1) return nums.length;
  let maxV = nums[0];
  let k = 1;
  let res = 1;
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] == maxV) {
      k += 1;
      res = Math.max(res, k);
    } else if (nums[i] > maxV) {
      k = 1;
      maxV = nums[i];
      res = 1;
    } else {
      k = 0;
    }
  }

  return res;
};

module.exports = longestSubarray;
