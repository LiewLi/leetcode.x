/**
 * @param {number[]} nums
 * @param {number} m
 * @return {boolean}
 */
var canSplitArray = function(nums, m) {
  const prefix_sum = new Array(nums.length + 1).fill(0);
  let sum = 0;
  for (let i = 0; i < nums.length; ++i) {
    sum += nums[i];
    prefix_sum[i + 1] = sum;
  }
  const cache = {};
  const N = nums.length;
  const split_helper = (i, j) => {
    if (i >= j) return true;
    const key = i * N + j;
    if (key in cache) {
      return cache[key];
    }
    for (let k = i; k < j; ++k) {
      const leftSum = prefix_sum[k + 1] - prefix_sum[i];
      const rightSum = prefix_sum[j + 1] - prefix_sum[k + 1];
      const leftValid = k == i || (leftSum >= m && split_helper(i, k));
      const rightValid =
        j == k + 1 || (rightSum >= m && split_helper(k + 1, j));
      if (leftValid && rightValid) {
        cache[key] = true;
        return true;
      }
    }
    cache[key] = false;
    return false;
  };
  return split_helper(0, nums.length - 1);
};

module.exports = canSplitArray;
