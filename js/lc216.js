/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  const ans = [];
  const dfs = (vals, m, sum) => {
    if (sum > n || vals.length > k) return;
    if (vals.length == k && sum == n) {
      ans.push(vals);
      return;
    }
    for (let i = m; i <= 9; ++i) {
      const arr = [...vals].concat([i]);
      dfs(arr, i + 1, sum + i);
    }
  };
  dfs([], 1, 0);

  return ans;
};

module.exports = combinationSum3;
