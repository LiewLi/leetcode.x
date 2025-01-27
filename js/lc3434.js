/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
  const k_cnt_map = new Array(nums.length + 1).fill(0);
  let total_k = 0;
  const dp = {};
  const map = {};
  for (let i = 0; i < nums.length; ++i) {
    total_k += nums[i] == k ? 1 : 0;
    k_cnt_map[i + 1] = total_k;
  }
  let res = total_k;
  for (let i = 0; i < nums.length; ++i) {
    const d = nums[i] == k ? 0 : 1;
    if (nums[i] in map) {
      const last = map[nums[i]];
      dp[nums[i]] = Math.max(
        total_k + d,
        dp[nums[i]] + d - (k_cnt_map[i + 1] - k_cnt_map[last])
      );
    } else {
      dp[nums[i]] = total_k + d;
    }
    map[nums[i]] = i;
    res = Math.max(res, dp[nums[i]]);
  }
  return res;
};

module.exports = maxFrequency;
