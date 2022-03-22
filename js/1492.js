/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
  let f = 1;
  let cnt = 0;
  while (f <= n) {
    if (n % f == 0) cnt++;
    if (cnt == k) return f;
    ++f;
  }
  return -1;
};
