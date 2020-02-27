/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
  const ret = [];
  const map = {};
  const edges = new Array(accounts.length);
  for (let i = 0; i < accounts.length; ++i) edges[i] = [];
  const _ = (i, j) => {
    edges[i].push(j);
    edges[j].push(i);
  };
  accounts.forEach((acc, idx) => {
    let i = 1;
    for (; i < acc.length; ++i) {
      if (acc[i] in map) {
        _(map[acc[i]], idx);
      }
      map[acc[i]] = idx;
    }
  });

  const set = new Set();
  const dfs = (u, a) => {
    set.add(u);
    accounts[u].forEach((e, idx) => idx && a.add(e));
    for (const e of edges[u]) {
      if (!set.has(e)) dfs(e, a);
    }
  };

  for (let i = 0; i < accounts.length; ++i) {
    if (set.has(i)) continue;
    const s = new Set();
    dfs(i, s);
    const arr = [...s].sort((a, b) => {
      if (a < b) return -1;
      else if (a === b) return 0;
      else return 1;
    });
    ret.push([accounts[i][0], ...arr]);
  }
  return ret;
};

console.log(
  accountsMerge([
    ["David", "David0@m.co", "David1@m.co"],
    ["David", "David3@m.co", "David4@m.co"],
    ["David", "David4@m.co", "David5@m.co"],
    ["David", "David2@m.co", "David3@m.co"],
    ["David", "David1@m.co", "David2@m.co"]
  ])
);
