/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  if (nums.length <= 1) {
    return nums.length;
  }
  var maxL = 1;
  var maxSoFar = 1;
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] > nums[i - 1]) {
      ++maxSoFar;
    } else {
      maxSoFar = 1;
    }
    maxL = Math.max(maxL, maxSoFar);
  }

  return maxL;
};

console.log(findLengthOfLCIS([1, 3, 5, 4, 7]));
