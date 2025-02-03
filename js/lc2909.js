/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function(nums) {
  const pre_min = new Array(nums.length);
  const suf_min = new Array(nums.length);
  for (let i = 0; i < nums.length; ++i) {
    if (i == 0) pre_min[i] = nums[i];
    else pre_min[i] = Math.min(pre_min[i - 1], nums[i]);
  }
  for (let i = nums.length - 1; i >= 0; --i) {
    if (i == nums.length - 1) suf_min[i] = nums[i];
    else suf_min[i] = Math.min(suf_min[i + 1], nums[i]);
  }
  let res = -1;
  for (let i = 1; i < nums.length - 1; ++i) {
    if (pre_min[i] < nums[i] && nums[i] > suf_min[i]) {
      const sum = pre_min[i] + nums[i] + suf_min[i];
      if (res < 0) res = sum;
      else res = Math.min(res, sum);
    }
  }
  return res;
};

module.exports = minimumSum;
