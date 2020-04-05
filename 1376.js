/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, manager, informTime) {
  const edges = [];
  manager.forEach((m, idx) => {
    if (m < 0) return;
    edges[m] = edges[m] || [];
    edges[m].push(idx);
  });

  let maxTime = 0;
  const dfs = (node, time) => {
    maxTime = Math.max(maxTime, time);
    for (const e of edges[node] || []) {
      dfs(e, time + informTime[node]);
    }
  };

  dfs(headID, 0);

  return maxTime;
};

console.log(
  numOfMinutes(
    15,
    0,
    [-1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6],
    [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]
  )
);
