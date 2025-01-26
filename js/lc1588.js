/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
  const _all_zero = arr => {
    return arr.every(a => a == 0);
  };
  let res = 0;
  while (!_all_zero(nums)) {
    nums.forEach((n, idx) => {
      if (n % 2 == 1) {
        ++res;
        nums[idx]--;
      }
    });
    if (!_all_zero(nums)) {
      nums = nums.map(n => n >> 1);
      ++res;
    }
  }
  return res;
};

module.exports = minOperations;
