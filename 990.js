/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
  function DisjointSet(N) {
    this.par = [];
    for (let i = 0; i < N; ++i) {
      this.par[i] = i;
    }
  }

  DisjointSet.prototype.find = function(u) {
    return (this.par[u] = this.par[u] == u ? u : this.find(this.par[u]));
  };

  DisjointSet.prototype.uion = function(u, v) {
    const uPar = this.find(u);
    const vPar = this.find(v);
    this.par[uPar] = vPar;
  };

  const disjointSet = new DisjointSet(26);

  const notEquals = [];

  for (const eq of equations) {
    const base = "a".charCodeAt(0);
    const op = eq.substring(1, 3);
    if (op === "==") {
      disjointSet.uion(eq.charCodeAt(0) - base, eq.charCodeAt(3) - base);
    } else if (op === "!=") {
      notEquals.push([eq.charCodeAt(0) - base, eq.charCodeAt(3) - base]);
    }
  }
  for (const notEq of notEquals) {
    const [u, v] = notEq;
    if (disjointSet.find(u) == disjointSet.find(v)) return false;
  }

  return true;
};

console.log(equationsPossible(["a==b", "b!=c", "c==a"]));
