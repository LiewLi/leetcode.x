/**
 * @param {number} n
 * @return {number[]}
 */
var constructDistancedSequence = function(n) {
  const res = new Array(2 * n - 1).fill(0);
  const stack = [];
  let i = 0;
  while (i < res.length) {
    let maxN = n;
    if (res[i] != 0) {
      const old = res[i];
      if (old > 1 && old + i < res.length && res[old + i] == old) {
        res[old + i] = 0;
      }
      res[i] = 0;
      maxN = old - 1;
    }
    for (; maxN >= 1; --maxN) {
      if (res.findIndex(a => a == maxN) == -1) break;
    }
    if (maxN < 1) {
      if (stack.length > 1) {
        const top = stack.pop();
        const val = res[top];
        if (val > 1 && top + val < res.length) {
          res[val + top] = 0;
        }
        i = top;
        if (res[i] == 1) {
          res[i] = 0;
          i = stack.pop();
        }
      }
      continue;
    }

    res[i] = maxN;
    stack.push(i);
    if (maxN == 1 || (i + maxN < res.length && res[i + maxN] == 0)) {
      if (maxN > 1) {
        res[i + maxN] = maxN;
      }
      while (i < res.length && res[i] != 0) ++i;
    } else {
      stack.pop();
    }
  }
  return res;
};

module.exports = constructDistancedSequence;
