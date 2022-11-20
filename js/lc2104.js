/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function(nums) {
  let res = 0;
  for (let i = 0; i < nums.length; ++i) {
    let minV = nums[i];
    let maxV = nums[i];
    for (let j = i + 1; j < nums.length; ++j) {
      minV = Math.min(nums[j], minV);
      maxV = Math.max(nums[j], maxV);
      res += maxV - minV;
    }
  }
  return res;
};

module.exports = subArrayRanges;
