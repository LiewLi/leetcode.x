/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function(nums) {
  const N = nums.length;
  if (N <= 1) return `${nums[0]}`;
  let res = "";
  for (let i = 0; i < N; ++i) {
    res += `${nums[i]}`;
    if (i != N - 1) {
      res += "/";
      if (i == 0 && N > 2) res += "(";
    } else {
      if (N > 2) res += ")";
    }
  }
  return res;
};

module.exports = optimalDivision;
