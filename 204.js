/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  const primes = new Array(n).fill(true);
  primes[0] = false;
  primes[1] = false;
  for (let i = 0; i * i < n; ++i) {
    if (primes[i]) {
      for (let j = i * i; j < n; j += i) {
        primes[j] = false;
      }
    }
  }
  return primes.reduce((sum, p) => (sum += p ? 1 : 0), 0);
};

console.log(countPrimes(10));
