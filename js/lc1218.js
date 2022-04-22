/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
  const dp = Array(arr.length).fill(1);
  const map = {};
  arr.forEach((v, idx) => {
    if (map[v - difference] !== undefined) {
      dp[idx] = Math.max(...map[v - difference]) + 1;
    }
    map[v] = map[v] || [];
    map[v].push(dp[idx]);
  });
  return Math.max(...dp);
};

module.exports = longestSubsequence;
