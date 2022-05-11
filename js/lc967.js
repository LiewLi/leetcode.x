/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function(n, k) {
  let ans = new Set();
  const table = Array(10).fill(0);
  for (let i = 0; i <= 9; ++i) {
    table[i] = [];
    const dir = [k, -k];
    for (const d of dir) {
      if (i + d >= 0 && i + d <= 9) {
        table[i].push(i + d);
      }
    }
  }

  const que = [...table.keys()].slice(1);
  const dfs = (c, num, level) => {
    const v = c + num * 10;
    if (level == n) {
      if (!ans.has(v)) ans.add(v);
      return;
    }
    for (const e of table[c]) {
      dfs(e, v, level + 1);
    }
  };

  for (const q of que) {
    dfs(q, 0, 1);
  }
  ans = [...ans];
  ans.sort((a, b) => a - b);

  return ans;
};

module.exports = numsSameConsecDiff;
