/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  const m = matrix.length;
  if (m <= 0) return 0;
  const n = matrix[0].length;
  if (n <= 0) return 0;

  const dp = new Array(n).fill(0);
  let prev = 0;
  let maxLen = 0;
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      const tmp = dp[j];
      if (matrix[i][j] === "1") {
        dp[j] = Math.min(Math.min(prev, j > 0 ? dp[j - 1] : 0), dp[j]) + 1;
        maxLen = Math.max(maxLen, dp[j]);
      } else {
        dp[j] = 0;
      }
      prev = tmp;
    }
  }
  return maxLen * maxLen;
};
