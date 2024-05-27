/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumMinProduct = function(nums) {
  const prev = new Array(nums.length).fill(0);
  const next = new Array(nums.length).fill(nums.length);
  const prefixSum = new Array(nums.length + 1).fill(0);
  let stack = [];
  for (let i = 0; i < nums.length; ++i) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] > nums[i]) {
      next[stack.pop()] = i;
    }
    stack.push(i);
  }

  stack = [];
  for (let i = nums.length - 1; i >= 0; --i) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] >= nums[i]) {
      prev[stack.pop()] = i + 1;
    }
    stack.push(i);
  }

  for (let i = 0; i < nums.length; ++i) {
    prefixSum[i + 1] = prefixSum[i] + nums[i];
  }
  const MOD = 10 ** 9 + 7;
  let res = 0n;
  for (let i = 0; i < nums.length; ++i) {
    const s = prev[i];
    const e = next[i];
    const v = BigInt(nums[i]) * BigInt(prefixSum[e] - prefixSum[s]);
    if (v > res) {
      res = v;
    }
  }
  return Number(res % BigInt(MOD));
};

module.exports = maxSumMinProduct;
