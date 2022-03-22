/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
  let dp = new Array(2001).fill(0);
  dp[nums[0] + 1000] = 1;
  dp[-nums[0] + 1000] += 1;
  for (let i = 1; i < nums.length; ++i) {
    const next = new Array(2001).fill(0);
    for (let k = -1000; k <= 1000; ++k) {
      if (dp[k + nums[i] + 1000]) {
        next[k + 1000] += dp[k + nums[i] + 1000];
      }
      if (dp[k - nums[i] + 1000]) {
        next[k + 1000] += dp[k - nums[i] + 1000];
      }
    }
    dp = next;
  }
  return dp[S + 1000] || 0;
};

console.log(findTargetSumWays([0, 0, 0, 0, 0, 0, 0, 0, 1], 1));
