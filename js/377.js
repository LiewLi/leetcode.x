/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
  nums = [...new Set(nums)];
  nums.sort((a, b) => a - b);

  const dp = new Array(target + 1).fill(-1);

  const _ = t => {
    let cnt = 0;
    if (t < 0) return 0;
    if (t == 0) {
      return 1;
    }
    if (dp[t] !== -1) return dp[t];
    for (let i = 0; i < nums.length; ++i) {
      cnt += _(t - nums[i]);
    }
    return (dp[t] = cnt);
  };

  return _(target);
};
console.log(combinationSum4([2, 1, 3], 35));
