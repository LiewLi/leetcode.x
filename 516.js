/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  if (s.length <= 0) return 0;
  const dp = new Array(s.length);
  for (let i = 0; i < s.length; ++i) dp[i] = new Array(s.length).fill(1);
  for (let i = s.length - 1; i >= 0; --i) {
    for (let j = i + 1; j < s.length; ++j) {
      dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      if (s[i] == s[j]) {
        dp[i][j] = Math.max(j >= i + 2 ? dp[i + 1][j - 1] + 2 : 2, dp[i][j]);
      }
    }
  }
  return dp[0][s.length - 1];
};

console.log(longestPalindromeSubseq("cbbd"));
