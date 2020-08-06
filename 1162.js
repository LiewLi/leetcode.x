/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
  const m = grid.length;
  const n = grid[0].length;

  const que = [];
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (grid[i][j]) {
        que.push([i, j]);
      }
    }
  }

  if (!que.length || que.length == m * n) {
    return -1;
  }

  let level = -1;
  while (que.length) {
    level++;
    const size = que.length;
    for (let k = 0; k < size; ++k) {
      const e = que.shift();
      const x = [-1, 1, 0, 0];
      const y = [0, 0, -1, 1];
      for (let i = 0; i < 4; ++i) {
        const xx = e[0] + x[i];
        const yy = e[1] + y[i];
        if (xx >= 0 && xx < n && yy >= 0 && yy < m && grid[xx][yy] == 0) {
          grid[xx][yy] = 1;
          que.push([xx, yy]);
        }
      }
    }
  }

  return level;
};

console.log(maxDistance([[1, 0, 0], [0, 0, 0], [0, 0, 0]]));
