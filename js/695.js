/**
 * @param {number[][]} grid
 * @return {number}
 */

class UnionSet {
  constructor(len) {
    this.parent = [];
    for (let i = 0; i < len; ++i) {
      this.parent[i] = i;
    }
  }

  find(x) {
    return (this.parent[x] =
      this.parent[x] == x ? x : this.find(this.parent[x]));
  }

  union(x, y) {
    const xp = this.find(x);
    const yp = this.find(y);
    if (xp != yp) {
      this.parent[xp] = yp;
    }
  }
}

var maxAreaOfIsland = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const set = new UnionSet(m * n);

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (!grid[i][j]) continue;
      const idx = i * n + j;
      if (i > 0 && grid[i - 1][j]) {
        set.union(idx, idx - n);
      }

      if (i < m - 1 && grid[i + 1][j]) {
        set.union(idx, idx + n);
      }

      if (j > 0 && grid[i][j - 1]) {
        set.union(idx, idx - 1);
      }

      if (j < n - 1 && grid[i][j + 1]) {
        set.union(idx, idx + 1);
      }
    }
  }

  let maxN = 0;
  const map = {};

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (!grid[i][j]) continue;
      const p = set.find(i * n + j);
      map[p] = map[p] || 0;
      maxN = Math.max(maxN, ++map[p]);
    }
  }

  return maxN;
};

console.log(
  maxAreaOfIsland([
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 1]
  ])
);
