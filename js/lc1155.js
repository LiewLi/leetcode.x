/**
 * @param {number} d
 * @param {number} f
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(d, f, target) {
  const MOD = 10 ** 9 + 7;

  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= d; ++i) {
    for (let t = target; t >= 0; --t) {
      let sum = 0;
      for (let j = 1; j <= f; ++j) {
        sum += dp[t - j] || 0;
      }
      dp[t] = sum;
      dp[t] %= MOD;
    }
  }

  return dp[target];
};

console.log(numRollsToTarget(30, 30, 500));
