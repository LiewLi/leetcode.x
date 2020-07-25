/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function(s, pairs) {
  function DisjointSet(len) {
    this.par = [];
    for (let i = 0; i < len; ++i) {
      this.par[i] = i;
    }
  }

  DisjointSet.prototype.find = function(u) {
    return (this.par[u] = this.par[u] == u ? u : this.find(this.par[u]));
  };

  DisjointSet.prototype.union = function(u, v) {
    this.par[this.find(u)] = this.find(v);
  };

  const ds = new DisjointSet(s.length);

  pairs.forEach(p => ds.union(p[0], p[1]));

  const _comp = (a, b) => (a == b ? 0 : a > b ? 1 : -1);

  const arr = s.split("");

  const map = {};

  for (let i = 0; i < s.length; ++i) {
    const p = ds.find(i);
    (map[p] = map[p] || []).push(i);
  }

  for (const a of Object.values(map)) {
    const tmp = a.slice();
    a.sort((a, b) => _comp(s[a], s[b]));
    tmp.forEach((t, idx) => (arr[t] = s[a[idx]]));
  }

  return arr.join("");
};

console.log(smallestStringWithSwaps("dcab", [[0, 3], [1, 2]]));
