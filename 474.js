/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
  const dp = new Array(m + 1);
  for (let i = 0; i <= m; ++i) {
    dp[i] = new Array(n + 1).fill(0);
  }
  strs.forEach(s => {
    let k = 0;
    let t = 0;
    for (const ch of s) {
      k += ch === "0" ? 1 : 0;
      t += ch === "1" ? 1 : 0;
    }

    for (let i = m; i >= k; --i) {
      for (let j = n; j >= t; --j) {
        dp[i][j] = Math.max(dp[i][j], dp[i - k][j - t] + 1);
      }
    }
  });

  return dp[m][n];
};

console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3));
