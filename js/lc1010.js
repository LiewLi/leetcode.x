/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
  const arr = Array(60).fill(0);
  for (const t of time) arr[t % 60] = (arr[t % 60] || 0) + 1;
  let ans = 0;
  for (let i = 0; i <= 30; ++i) {
    const j = (60 - i) % 60;
    if (i == j) ans += (arr[i] * (arr[i] - 1)) / 2;
    else ans += arr[i] * arr[j];
  }
  return ans;
};

module.exports = numPairsDivisibleBy60;
