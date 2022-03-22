/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let s = -1;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] != 0 && s >= 0) {
      [nums[i], nums[s]] = [nums[s], nums[i]];
      s++;
    } else if (nums[i] === 0 && s < 0) {
      s = i;
    }
  }
};
