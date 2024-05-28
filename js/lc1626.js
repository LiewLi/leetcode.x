/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function(scores, ages) {
  const arr = ages
    .map((v, idx) => [v, scores[idx]])
    .sort((a, b) => {
      if (b[0] == a[0]) {
        return b[1] - a[1];
      } else {
        return b[0] - a[0];
      }
    });
  const dp = new Array(scores.length + 1).fill(0);
  let res = 0;
  for (let i = 0; i < arr.length; ++i) {
    const v = arr[i][1];
    dp[i + 1] = v;
    for (let j = i - 1; j >= 0; --j) {
      if (arr[j][1] >= v) {
        dp[i + 1] = Math.max(dp[i + 1], v + dp[j + 1]);
      }
    }
    res = Math.max(res, dp[i + 1]);
  }
  return res;
};

module.exports = bestTeamScore;
