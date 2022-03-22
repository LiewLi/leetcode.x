/**
 * @param {number[]} A
 * @return {number}
 */
var longestArithSeqLength = function(A) {
  const dp = new Array(A.length);
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  for (const a of A) {
    min = Math.min(min, a);
    max = Math.max(max, a);
  }

  const N = max - min + 1;

  for (let i = 0; i < A.length; ++i) {
    dp[i] = new Array(2 * N).fill(1);
  }

  let maxN = 0;
  for (let i = 1; i < A.length; ++i) {
    for (let j = 0; j < i; ++j) {
      const k = A[i] - A[j] + N;
      dp[i][k] = Math.max(dp[i][k], dp[j][k] + 1);
      maxN = Math.max(maxN, dp[i][k]);
    }
  }
  return maxN;
};

console.log(longestArithSeqLength([9, 4, 7, 2, 10]));
