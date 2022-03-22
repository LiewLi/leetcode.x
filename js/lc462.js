/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
  if (!nums.length) return 0;
  nums.sort((a, b) => a - b);
  const median = nums[Math.floor(nums.length / 2)];
  return nums.reduce((p, c) => p + Math.abs(c - median), 0);
};
