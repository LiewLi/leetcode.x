/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const dp = new Array(m + 1);
  for (let i = 0; i <= m; ++i) {
    dp[i] = new Array(n + 1).fill(0);
  }

  let sum = 0;
  for (let i = 1; i <= m; ++i) {
    for (let j = 1; j <= n; ++j) {
      if (!matrix[i - 1][j - 1]) continue;
      const _ = Math.min;
      dp[i][j] = _(dp[i - 1][j], _(dp[i][j - 1], dp[i - 1][j - 1])) + 1;
      sum += dp[i][j];
    }
  }

  return sum;
};
