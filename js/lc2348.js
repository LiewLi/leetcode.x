/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
  let res = 0;
  let zeros = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] == 0) {
      zeros++;
    } else {
      if (zeros > 0) {
        res += ((zeros + 1) * zeros) / 2;
      }
      zeros = 0;
    }
  }
  return res + ((zeros + 1) * zeros) / 2;
};

module.exports = zeroFilledSubarray;
