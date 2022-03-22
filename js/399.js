/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
  const map = {};

  for (let i = 0; i < equations.length; ++i) {
    const eq = equations[i];
    for (let j = 0; j <= 1; ++j) {
      map[eq[j]] = map[eq[j]] || [];
      map[eq[j]].push([eq[1 - j], j === 0 ? values[i] : 1 / values[i]]);
    }
  }

  const calc = (s, e, n, set) => {
    if (!map[s]) return -1;
    if (s === e) return n;
    set.add(s);
    for (const [node, v] of map[s]) {
      if (set.has(node)) continue;
      const val = calc(node, e, v * n, set);
      if (val !== -1) return val;
    }

    return -1;
  };

  const ret = [];
  for (const q of queries) {
    ret.push(calc(q[0], q[1], 1, new Set()));
  }
  return ret;
};

console.log(
  calcEquation(
    [["a", "b"], ["b", "c"]],
    [2.0, 3.0],
    [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]]
  )
);
