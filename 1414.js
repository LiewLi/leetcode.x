/**
 * @param {number} k
 * @return {number}
 */
var findMinFibonacciNumbers = function(k) {
  const fibs = [1];
  let f = 1;
  let g = 1;
  while (g <= k) {
    const t = f + g;
    f = g;
    g = t;
    fibs.push(t);
  }

  let ret = 0;
  let i = fibs.length - 1;
  while (k > 0) {
    while (k >= fibs[i]) {
      k -= fibs[i];
      ret++;
    }
    --i;
  }

  return ret;
};

console.log(findMinFibonacciNumbers(7082040));
