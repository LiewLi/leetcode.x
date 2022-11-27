/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplit = function(nums) {
  if (nums.length < 3) return 0;
  const MOD = 1e9 + 7;
  let res = 0;
  const prefixSum = Array(nums.length).fill(0);
  let sum = 0;
  for (let i = 0; i < nums.length; ++i) {
    sum += nums[i];
    prefixSum[i] = sum;
  }

  let j = 0;
  let k = 0;
  for (let i = 0; i < nums.length - 2; ++i) {
    j = Math.max(i + 1, j);
    while (j < nums.length - 1 && prefixSum[j] < prefixSum[i] * 2) {
      ++j;
    }
    k = Math.max(j, k);
    while (
      k < nums.length - 1 &&
      prefixSum[k] - prefixSum[i] <= prefixSum[nums.length - 1] - prefixSum[k]
    ) {
      ++k;
    }

    res = (res + k - j) % MOD;
  }

  return res;
};

module.exports = waysToSplit;
