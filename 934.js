/**
 * @param {number[][]} A
 * @return {number}
 */
var shortestBridge = function(A) {
  const m = A.length;
  const n = A[0].length;
  const que = [];

  const dfs = (i, j) => {
    if (i < 0 || i >= m || j < 0 || j >= n || A[i][j] !== 1) return;
    que.push([i, j, 0]);
    A[i][j] = 2;
    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  };

  let flag = false;
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (A[i][j]) {
        dfs(i, j);
        flag = true;
        break;
      }
    }
    if (flag) break;
  }

  const $ = (x, y) => !(x < 0 || x >= m || y < 0 || y >= n || A[x][y] === 2);

  while (que.length) {
    const size = que.length;
    for (let i = 0; i < size; ++i) {
      const n = que.shift();
      if (A[n[0]][n[1]] === 1) return n[2] - 1;
      const dx = [0, 0, -1, 1];
      const dy = [-1, 1, 0, 0];
      for (let i = 0; i < 4; ++i) {
        for (let j = 0; j < 4; ++j) {
          const xx = n[0] + dx[i];
          const yy = n[1] + dy[i];
          if ($(xx, yy)) {
            if (A[xx][yy] === 0) A[xx][yy] = 2;
            que.push([xx, yy, n[2] + 1]);
          }
        }
      }
    }
  }
};

console.log(
  shortestBridge([
    [0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 0]
  ])
);
