/**
 * @param {number[]} A
 * @return {number}
 */
var numFactoredBinaryTrees = function(A) {
  A.sort((a, b) => a - b);
  let cnt = 0;
  const MOD = Math.pow(10, 9) + 7;
  const cache = {};
  const set = new Set(A);
  const _ = n => {
    if (n in cache) return cache[n];
    let c = 1;
    const tmp = new Set();
    for (let i = 0; i < A.length; ++i) {
      if (A[i] >= n) break;
      if (tmp.has(A[i])) continue;
      if (n % A[i] === 0 && set.has(A[i]) && set.has(n / A[i])) {
        c += _(A[i]) * _(n / A[i]) * (A[i] * A[i] === n ? 1 : 2);
        c %= MOD;
        tmp.add(A[i]);
        tmp.add(n / A[i]);
      }
    }

    return (cache[n] = c);
  };

  for (const n of A) {
    cnt += _(n);
    cnt %= MOD;
  }
  return cnt;
};

console.log(numFactoredBinaryTrees([2, 4, 5, 10]));
