/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfGoodSubarraySplits = function(nums) {
  let res = 0;
  let cnt = -1;
  const MOD = 10 ** 9 + 7;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] == 1) {
      if (res <= 0) {
        res = 1;
      }
      if (cnt > 0) {
        res *= cnt;
        res %= MOD;
      }
      cnt = 1;
    } else if (cnt >= 0) {
      cnt++;
    }
  }
  return res;
};

module.exports = numberOfGoodSubarraySplits;
