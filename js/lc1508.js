/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, left, right) {
  const MOD = 10 ** 9 + 7;
  const prefixSum = [0];
  let sum = 0;
  for (let i = 1; i <= nums.length; ++i) {
    prefixSum.push(sum + nums[i - 1]);
    sum += nums[i - 1];
  }

  const que = [];
  for (let i = 1; i <= nums.length; ++i) {
    for (let j = 0; j < i; ++j) {
      que.push(prefixSum[i] - prefixSum[j]);
    }
  }
  que.sort((a, b) => a - b);

  let ans = 0;
  for (let i = left - 1; i < Math.min(right, que.length); ++i) {
    ans += que[i];
    ans %= MOD;
  }

  return ans;
};

module.exports = rangeSum;
