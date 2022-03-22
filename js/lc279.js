/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  const arr = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
  arr[0] = 0;
  arr[1] = 1;
  for (let i = 1; i <= n; ++i) {
    for (let k = 1; k * k <= i; ++k) {
      arr[i] = Math.min(arr[i], arr[i - k * k] + 1);
    }
  }

  return arr[n];
};

console.log(numSquares(12));
