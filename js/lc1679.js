/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
  nums.sort((a, b) => a - b);
  let i = 0;
  let j = nums.length - 1;
  let res = 0;
  while (i < j) {
    if (nums[i] + nums[j] == k) {
      res += 1;
      ++i;
      --j;
    } else if (nums[i] + nums[j] < k) {
      ++i;
    } else {
      --j;
    }
  }
  return res;
};

module.exports = maxOperations;
