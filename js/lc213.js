/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length <= 0) {
    return 0;
  }
  if (nums.length <= 3) {
    return Math.max(...nums);
  }
  const _rob = arr => {
    const dp = new Array(arr.length + 1).fill(0);
    dp[1] = arr[0];
    for (let i = 2; i <= arr.length; ++i) {
      dp[i] = Math.max(dp[i - 2] + arr[i - 1], dp[i - 1]);
    }
    return dp[arr.length];
  };

  return Math.max(_rob(nums.slice(0, -1)), _rob(nums.slice(1)));
};

module.exports = rob;
