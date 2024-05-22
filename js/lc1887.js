/**
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function(nums) {
  if (nums.length <= 0) {
    return 0;
  }
  nums.sort((a, b) => b - a);
  let res = 0;
  let curN = nums[0];
  for (let i = 1; i < nums.length; ++i) {
    if (curN != nums[i]) {
      curN = nums[i];
      res += i;
    }
  }

  return res;
};

module.exports = reductionOperations;
