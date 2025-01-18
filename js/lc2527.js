/**
 * @param {number[]} nums
 * @return {number}
 */
var xorBeauty = function(nums) {
  let ret = 0;
  for (const n of nums) {
    ret ^= n;
  }
  return ret;
};

module.exports = xorBeauty;
