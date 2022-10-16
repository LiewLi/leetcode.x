/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
  if (nums.length <= 1) return 0;
  nums.sort((a, b) => a - b);
  let i = 0;
  let j = nums.length - 1;
  let moves = 0;
  while (i < j) {
    moves += nums[j] - nums[i];
    while (i + 1 < j && nums[i + 1] == nums[i]) {
      i += 1;
    }
    j -= 1;
  }
  return moves;
};

module.exports = minMoves;
