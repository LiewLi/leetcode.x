/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
  function DisjointSet(len) {
    this.arr = [];
    for (let i = 0; i < len; ++i) {
      this.arr[i] = i;
    }
  }

  DisjointSet.prototype.find = function(u) {
    return (this.arr[u] = this.arr[u] == u ? u : this.find(this.arr[u]));
  };

  DisjointSet.prototype.union = function(u, v) {
    this.arr[this.find(u)] = this.find(v);
  };

  const m = grid.length;
  const n = grid[0].length;

  const ds = new DisjointSet(m * n);

  const islands = [];

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (!grid[i][j]) {
        islands.push(i * n + j);
        const x = [-1, 1, 0, 0];
        const y = [0, 0, -1, 1];
        for (let k = 0; k < 4; ++k) {
          if (
            i + x[k] >= 0 &&
            i + x[k] < m &&
            j + x[k] >= 0 &&
            j + y[k] < n &&
            !grid[i + x[k]][j + y[k]]
          ) {
            ds.union(i * n + j, (i + x[k]) * n + j + y[k]);
          }
        }
      }
    }
  }

  const map = {};
  islands.forEach(i => (map[ds.find(i)] = map[ds.find(i)] || []).push(i));
  return Object.values(map).filter(v =>
    v.every(a => {
      const i = Math.floor(a / n);
      const j = a % n;
      return !(i <= 0 || i >= m - 1 || j <= 0 || j >= n - 1);
    })
  ).length;
};

console.log(
  closedIsland([
    [1, 1, 1, 1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 1, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 0]
  ])
);
