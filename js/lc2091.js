/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function(nums) {
  if (nums.length <= 0) return 0;
  if (nums.length == 1) return 1;
  let maxIdx = 0;
  let minIdx = 0;
  let minVal = nums[0];
  let maxVal = nums[0];
  for (let i = 1; i < nums.length; ++i) {
    if (minVal > nums[i]) {
      minVal = nums[i];
      minIdx = i;
    }

    if (maxVal < nums[i]) {
      maxVal = nums[i];
      maxIdx = i;
    }
  }

  let res = nums.length;
  const leftIdx = Math.min(minIdx, maxIdx);
  const rightIndex = Math.max(minIdx, maxIdx);

  res = Math.min(res, 1 + rightIndex); // left-left
  res = Math.min(res, nums.length - leftIdx); // right-right
  res = Math.min(res, leftIdx + 1 + nums.length - rightIndex); // left-right

  return res;
};

module.exports = minimumDeletions;
