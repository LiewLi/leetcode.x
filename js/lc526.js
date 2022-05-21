/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function(n) {
  let ans = 0;

  const visited = Array(n + 1);

  dfs = idx => {
    if (idx == n + 1) {
      ans += 1;
      return;
    }
    for (let i = 1; i <= n; ++i) {
      if (!visited[i] && (i % idx == 0 || idx % i == 0)) {
        visited[i] = 1;
        dfs(idx + 1);
        visited[i] = 0;
      }
    }
  };
  dfs(1);
  return ans;
};

module.exports = countArrangement;
