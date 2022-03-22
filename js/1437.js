/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
  let idx = -1;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i]) {
      if (idx >= 0 && i - idx <= k) {
        return false;
      }
      idx = i;
    }
  }
  return true;
};

console.log(kLengthApart([1, 0, 0, 1, 0, 1], 2));
