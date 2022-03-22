/**
 * @param {number} n
 * @param {number[]} rollMax
 * @return {number}
 */
var dieSimulator = function(n, rollMax) {
  const MOD = 10 ** 9 + 7;

  if (n <= 0) return 0;
  const dp = new Array(6);
  for (let i = 0; i < 6; ++i) {
    const sub = new Array(n);
    for (let j = 0; j < n; ++j) {
      sub[j] = new Array(rollMax[i] + 1).fill(j == 0 ? 1 : 0);
    }
    dp[i] = sub;
  }

  for (let m = 1; m < n; ++m) {
    for (let i = 0; i < 6; ++i) {
      for (let k = 1; k <= rollMax[i]; ++k) {
        dp[i][m][k] = 0;
        for (let j = 0; j < 6; ++j) {
          if (j == i) dp[i][m][k] += k > 1 ? dp[i][m - 1][k - 1] : 0;
          else dp[i][m][k] += dp[j][m - 1][rollMax[j]];
          dp[i][m][k] %= MOD;
        }
      }
    }
  }
  let ret = 0;
  for (let i = 0; i < 6; ++i) {
    ret += dp[i][n - 1][rollMax[i]];
    ret %= MOD;
  }
  return ret;
};

console.log(dieSimulator(20, [8, 5, 10, 8, 7, 2]));
