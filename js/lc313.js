/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
  primes.sort();
  const ugly = new Array(n).fill(Number.MAX_SAFE_INTEGER);
  const idx = new Array(primes.length).fill(0);
  ugly[0] = 1;
  for (let i = 1; i < n; ++i) {
    for (let j = 0; j < primes.length; ++j) {
      ugly[i] = Math.min(ugly[i], ugly[idx[j]] * primes[j]);
    }
    for (let j = 0; j < primes.length; ++j) {
      idx[j] += primes[j] * ugly[idx[j]] == ugly[i] ? 1 : 0;
    }
  }

  return ugly[n - 1];
};

console.log(nthSuperUglyNumber(2, [2, 3, 5]));
