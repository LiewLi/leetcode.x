/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
  const dp = Array(nums.length).fill(1);
  const dpLen = Array(nums.length).fill(1);
  let ans = 0;
  let maxLen = 1;
  for (let i = 1; i < nums.length; ++i) {
    for (let j = i - 1; j >= 0; --j) {
      if (nums[j] < nums[i] && dp[j] + 1 >= dp[i]) {
        dpLen[i] = dp[j] + 1 > dp[i] ? dpLen[j] : dpLen[i] + dpLen[j];
        dp[i] = dp[j] + 1;
        maxLen = Math.max(maxLen, dp[i]);
      }
    }
  }

  dpLen.forEach((v, idx) => {
    if (dp[idx] == maxLen) {
      ans += v;
    }
  });
  return ans;
};

module.exports = findNumberOfLIS;
