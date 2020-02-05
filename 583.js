/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const n1 = word1.length;
  const n2 = word2.length;
  const dp = new Array(n1 + 1);
  for (let i = 0; i <= n1; ++i) {
    dp[i] = new Array(n2 + 1).fill(0);
  }

  for (let i = 1; i <= n1; ++i) {
    for (let j = 1; j <= n2; ++j) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = Math.max(
          1 + dp[i - 1][j - 1],
          Math.max(dp[i - 1][j], dp[i][j - 1])
        );
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return word1.length + word2.length - 2 * dp[n1][n2];
};

console.log(minDistance("a", "b"));
