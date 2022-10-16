/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
  let k = nums.length - 1;
  while (k > 0) {
    for (let i = 0; i < k; ++i) {
      nums[i] = (nums[i + 1] + nums[i]) % 10;
    }
    k -= 1;
  }
  return nums[0] % 10;
};

module.exports = triangularSum;
