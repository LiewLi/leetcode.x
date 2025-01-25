/**
 * @param {number} n
 * @param {number} start
 * @return {number[]}
 */
var circularPermutation = function(n, start) {
  const _to_bin_arr = num => {
    const res = [];
    for (let i = 0; i < n; ++i) {
      res.unshift(num & (1 << i) ? 1 : 0);
    }
    return res;
  };

  const _diff_by_1 = (n1, n2) => {
    let d = 0;
    for (let i = 0; i < n; ++i) {
      if (n1[i] != n2[i]) d++;
      if (d > 1) return false;
    }
    return d == 1;
  };

  const start_bin = _to_bin_arr(start);
  const arr = [start_bin];
  const state = [0];
  const set = new Set();
  set.add(start_bin.join(""));
  const N = 2 ** n;
  while (arr.length < N) {
    const top = arr[arr.length - 1];
    const idx = state[state.length - 1];
    if (idx >= n) {
      const num = arr.pop();
      set.delete(num.join(""));
      state.pop();
      continue;
    }
    const next = [...top];
    next[idx] = 1 - next[idx];
    const str = next.join("");
    state[state.length - 1]++;
    if (!set.has(str)) {
      if (set.size == N - 1 && !_diff_by_1(next, start_bin)) {
        continue;
      }
      arr.push(next);
      state.push(0);
      set.add(str);
    }
  }

  return arr.map(n => parseInt(n.join(""), 2));
};

module.exports = circularPermutation;
