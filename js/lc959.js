/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function(grid) {
  function DSU(N) {
    this.parent = [];
    for (let i = 0; i < N; ++i) {
      this.parent[i] = i;
    }
  }

  DSU.prototype.find = function(u) {
    if (this.parent[u] == u) return u;
    return (this.parent[u] = this.find(this.parent[u]));
  };

  DSU.prototype.union = function(u, v) {
    this.parent[this.find(u)] = this.find(v);
  };

  const N = grid.length;
  const dsu = new DSU(4 * N * N);

  for (let r = 0; r < N; ++r) {
    for (let c = 0; c < N; ++c) {
      const root = 4 * (r * N + c);
      if (grid[r][c] != "/") {
        dsu.union(root + 0, root + 2);
        dsu.union(root + 1, root + 3);
      }

      if (grid[r][c] != "\\") {
        dsu.union(root + 0, root + 1);
        dsu.union(root + 2, root + 3);
      }

      if (c > 0) {
        dsu.union(root + 1, 4 * (r * N + c - 1) + 2);
      }
      if (c < N - 1) {
        dsu.union(root + 2, 4 * (r * N + c + 1) + 1);
      }

      if (r > 0) {
        dsu.union(root + 0, 4 * ((r - 1) * N + c) + 3);
      }

      if (r < N - 1) {
        dsu.union(root + 3, 4 * ((r + 1) * N + c) + 0);
      }
    }
  }

  let cnt = 0;
  for (let i = 0; i < 4 * N * N; ++i) {
    if (dsu.find(i) == i) cnt++;
  }

  return cnt;
};
