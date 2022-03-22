/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
  const ret = [];
  const N = Math.floor(n / 2);
  for (let i = 1; i <= N; ++i) {
    ret.push(i);
    ret.push(-i);
  }
  if (n % 2) ret.push(0);
  return ret;
};
