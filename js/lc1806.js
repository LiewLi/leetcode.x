/**
 * @param {number} n
 * @return {number}
 */
var reinitializePermutation = function(n) {
  let ans = 0;

  let perm = Array(n);
  for (let i = 0; i < n; ++i) {
    perm[i] = i;
  }
  while (true) {
    ans += 1;
    const arr = [...perm];
    let flag = true;
    for (let i = 0; i < n; ++i) {
      if (i % 2 == 0) {
        arr[i] = perm[i / 2];
      } else {
        arr[i] = perm[n / 2 + (i - 1) / 2];
      }
      if (arr[i] != i) {
        flag = false;
      }
    }
    if (flag) return ans;
    perm = arr;
  }

  return ans;
};

module.exports = reinitializePermutation;
