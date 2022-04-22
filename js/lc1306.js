/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
  const visited = Array(arr.length).fill(false);
  const dfs = idx => {
    if (arr[idx] == 0) return true;
    visited[idx] = true;
    const next = [idx + arr[idx], idx - arr[idx]];
    for (const n of next) {
      if (n >= 0 && n < arr.length && !visited[n]) {
        if (dfs(n)) return true;
      }
    }
    return false;
  };
  return dfs(start);
};

module.exports = canReach;
