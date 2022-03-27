/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
  nums.sort((a, b) => a - b);
  let ans = 0;

  let s = 0;
  let e = 0;
  let sum = nums[s];

  while (e < nums.length) {
    if (sum + k >= nums[e] * (e - s + 1)) {
      ans = Math.max(ans, e - s + 1);
      e += 1;
      if (e < nums.length) sum += nums[e];
    } else {
      while (sum + k < nums[e] * (e - s + 1)) {
        sum -= nums[s];
        s += 1;
      }
    }
  }

  return ans;
};

module.exports = maxFrequency;
