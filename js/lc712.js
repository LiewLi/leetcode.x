/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
  const dp = [];
  for (let i = 0; i <= s1.length; ++i) {
    dp.push(Array(s2.length + 1).fill(0));
  }
  for (let i = 0; i < s1.length; ++i) {
    dp[i + 1][0] = dp[i][0] + s1.charCodeAt(i);
  }
  for (let j = 0; j < s2.length; ++j) {
    dp[0][j + 1] = dp[0][j] + s2.charCodeAt(j);
  }
  for (let i = 0; i < s1.length; ++i) {
    for (let j = 0; j < s2.length; ++j) {
      if (s1[i] == s2[j]) {
        dp[i + 1][j + 1] = dp[i][j];
      } else {
        const cost = s2.charCodeAt(j);
        let c = 0;
        let found = false;
        let k = i;
        for (; k >= 0; --k) {
          if (s1[k] == s2[j]) {
            found = true;
            break;
          }
          c += s1.charCodeAt(k);
        }
        if (found) {
          dp[i + 1][j + 1] = Math.min(
            cost + dp[i + 1][j],
            c + dp[k + 1][j + 1]
          );
        } else {
          dp[i + 1][j + 1] = cost + dp[i + 1][j];
        }
      }
    }
  }
  return dp[s1.length][s2.length];
};

module.exports = minimumDeleteSum;
