/**
 * @param {number[]} prizePositions
 * @param {number} k
 * @return {number}
 */
var maximizeWin = function(prizePositions, k) {
  const dp = Array(prizePositions.length + 1).fill(0);
  let res = 0;
  let j = 0;
  for (let i = 0; i < prizePositions.length; ++i) {
    while (prizePositions[j] + k < prizePositions[i]) {
      ++j;
    }
    dp[i + 1] = Math.max(dp[i], i - j + 1);
    res = Math.max(res, i - j + 1 + dp[j]);
  }
  return res;
};

module.exports = maximizeWin;
