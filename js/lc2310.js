/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var minimumNumbers = function(num, k) {
  if (num <= 0) {
    return 0;
  }
  const dp = new Array(num + 1).fill(-1);
  dp[0] = 0;
  const _check = n => {
    return n % 10 == k;
  };
  for (let n = k; n <= num; ++n) {
    if (_check(n)) {
      dp[n] = 1;
    } else {
      for (let m = k; m <= n; m += 10) {
        if (dp[n - m] != -1) {
          if (dp[n] == -1) {
            dp[n] = dp[n - m] + 1;
          } else {
            dp[n] = Math.min(dp[n], dp[n - m] + 1);
          }
        }
      }
    }
  }
  return dp[num];
};

module.exports = minimumNumbers;
