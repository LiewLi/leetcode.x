/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
  const passes = [1, 7, 30];
  const dp = new Array(days.length).fill(Number.MAX_SAFE_INTEGER);

  for (let i = 0; i < days.length; ++i) {
    passes.forEach((p, idx) => {
      const d = days[i] - p + 1;
      let j = i;
      for (; j >= 0; --j) {
        if (days[j] < d) {
          break;
        }
      }
      dp[i] = Math.min(dp[i], (j >= 0 ? dp[j] : 0) + costs[idx]);
    });
  }
  return dp[days.length - 1];
};

console.log(mincostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15]));
