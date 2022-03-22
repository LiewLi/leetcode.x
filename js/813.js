/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumOfAverages = function(A, K) {
  const dp = new Array(A.length);
  for (let i = 0; i < A.length; ++i) {
    dp[i] = new Array(K + 1).fill(0);
  }
  for (let i = 0; i < A.length; ++i) {
    for (let k = 1; k <= K; ++k) {
      let sum = 0;
      for (let j = i; j >= k - 1; --j) {
        sum += A[j];
        dp[i][k] = Math.max(
          dp[i][k],
          k <= 1
            ? sum / (i + 1)
            : (j > 0 ? dp[j - 1][k - 1] : 0) + sum / (i - j + 1)
        );
      }
    }
  }
  return dp[A.length - 1][K];
};
