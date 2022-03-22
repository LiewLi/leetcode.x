/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
  const sum = nums.reduce((p, c) => p + c);
  if (sum % k) return false;
  const subSum = sum / k;
  const dp = {};
  const _ = (state, remain) => {
    if (!remain) return true;
    if (state in dp) return dp[state];
    const t = ((remain - 1) % subSum) + 1;
    let valid = false;
    for (let i = 0; i < nums.length; ++i) {
      if (state & (1 << i) || nums[i] > t) continue;
      if (_(state | (1 << i), remain - nums[i])) {
        valid = true;
        break;
      }
    }
    return (dp[state] = valid);
  };

  return _(0, sum);
};

console.log(canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4));
