/**
 * @param {number[]} nums
 * @return {boolean}
 */
var validPartition = function(nums) {
  if (nums.length <= 0) {
    return false;
  }
  const dp = new Array(nums.length + 1).fill(false);
  dp[0] = true;
  for (let i = 2; i <= nums.length; ++i) {
    if (nums[i - 1] == nums[i - 2]) {
      dp[i] = dp[i - 2];
      if (!dp[i] && i >= 3 && nums[i - 1] == nums[i - 3]) {
        dp[i] = dp[i - 3];
      }
    } else if (
      i >= 3 &&
      nums[i - 1] == nums[i - 2] + 1 &&
      nums[i - 1] == nums[i - 3] + 2
    ) {
      dp[i] = dp[i - 3];
    }
  }
  return dp[nums.length];
};

module.exports = validPartition;
