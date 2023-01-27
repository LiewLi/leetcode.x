/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
  for (let i = 0, j = 1, k = 2; k < nums.length; ++i, ++j, ++k) {
    if (
      (nums[i] > nums[j] && nums[j] > nums[k]) ||
      (nums[i] < nums[j] && nums[j] < nums[k])
    ) {
      [nums[j], nums[k]] = [nums[k], nums[j]];
    }
  }
  return nums;
};

module.exports = rearrangeArray;
