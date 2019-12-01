function Union(len) {
  this.parent = [];
  for (let i = 0; i <= len; ++i) {
    this.parent[i] = i;
  }
}
Union.prototype.find = function(u) {
  return this.parent[u] === u
    ? u
    : (this.parent[u] = this.find(this.parent[u]));
};

Union.prototype.union = function(u, v) {
  const up = this.find(u);
  const vp = this.find(v);
  this.parent[up] = vp;
};

/**
 * @param {number[]} A
 * @return {number}
 */
var largestComponentSize = function(A) {
  let max = 1;
  for (const a of A) max = Math.max(max, a);
  const union = new Union(max + 1);

  for (const i of A) {
    for (let j = Math.floor(Math.sqrt(i)); j >= 2; --j) {
      if (i % j === 0) {
        union.union(i, j);
        union.union(i, i / j);
      }
    }
  }

  let maxN = 0;
  const cntMap = {};
  for (const a of A) {
    const p = union.find(a);
    cntMap[p] = (cntMap[p] || 0) + 1;
    maxN = Math.max(maxN, cntMap[p]);
  }
  return maxN;
};

console.log(largestComponentSize([20, 50, 9, 63]));
