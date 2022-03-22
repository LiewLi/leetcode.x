/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var maxSumAfterPartitioning = function(A, K) {
  const dp = [];
  for (let i = 0; i < A.length; ++i) {
    let maxSofar = A[i];
    for (let k = 0; k < K; ++k) {
      if (i - k >= 0) {
        maxSofar = Math.max(maxSofar, A[i - k]);
        dp[i] = Math.max(dp[i] || 0, maxSofar * (k + 1) + (dp[i - k - 1] || 0));
      }
    }
  }

  return dp[A.length - 1];
};

console.log(maxSumAfterPartitioning([1, 15, 7, 9, 2, 5, 10], 3));
