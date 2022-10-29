/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeII = function(nums, k) {
  if (nums.length <= 1) return 0;
  nums = nums.sort((a, b) => a - b);
  const i = 0;
  const j = nums.length - 1;
  let score = nums[j] - nums[i];
  const left = nums[i] + k;
  const right = nums[j] - k;
  console.log(left, right);
  for (let i = 0; i < nums.length - 1; ++i) {
    const maxV = Math.max(right, nums[i] + k);
    const minV = Math.min(left, nums[i + 1] - k);
    score = Math.min(maxV - minV, score);
  }

  return score;
};

module.exports = smallestRangeII;
