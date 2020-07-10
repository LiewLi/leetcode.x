/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
  const dp = [];

  let cnt = 0;
  for (let i = 0; i < nums.length; ++i) {
    dp[i] = cnt;
    if (nums[i]) cnt++;
    else cnt = 0;
  }

  cnt = 0;
  let ret = 0;
  for (let i = nums.length - 1; i >= 0; --i) {
    ret = Math.max(dp[i] + cnt, ret);
    if (nums[i]) cnt++;
    else cnt = 0;
  }

  return ret;
};
