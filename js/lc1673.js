/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var mostCompetitive = function(nums, k) {
  if (k >= nums.length) {
    return nums;
  }
  const res = [];
  for (let i = 0; i < nums.length; ++i) {
    if (res.length <= 0) {
      res.push(nums[i]);
    } else {
      if (nums[i] < res[res.length - 1]) {
        while (
          nums[i] < res[res.length - 1] &&
          res.length + nums.length - i - 1 >= k
        ) {
          res.pop();
        }
        res.push(nums[i]);
      } else if (res.length < k) {
        res.push(nums[i]);
      }
    }
  }
  return res;
};

module.exports = mostCompetitive;
