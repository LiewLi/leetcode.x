/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
  function DisjointSet(N) {
    this.par = [];
    for (let i = 0; i < N; i++) this.par[i] = i;
  }

  DisjointSet.prototype.find = function(u) {
    return this.par[u] == u ? u : (this.par[u] = this.find(this.par[u]));
  };

  DisjointSet.prototype.union = function(u, v) {
    const pu = this.find(u);
    const pv = this.find(v);
    this.par[pu] = pv;
  };

  const n = grid.length;
  const m = grid[0].length;

  const dset = new DisjointSet(n * m);

  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      if (!grid[i][j]) continue;
      const idx = i * m + j;
      for (let k = 0; k < m; k++) {
        if (k !== j && grid[i][k]) {
          dset.union(idx, i * m + k);
        }
      }

      for (let k = 0; k < n; ++k) {
        if (k != i && grid[k][j]) {
          dset.union(idx, k * m + j);
        }
      }
    }
  }

  const cnt = {};
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      const p = dset.find(i * m + j);
      cnt[p] = cnt[p] || 0;
      cnt[p]++;
    }
  }

  return Object.values(cnt).reduce((p, c) => p + (c > 1 ? c : 0), 0);
};

console.log(countServers([[1, 0, 0, 1, 0], [0, 0, 0, 0, 0], [0, 0, 0, 1, 0]]));
