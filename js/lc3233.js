/**
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var nonSpecialCount = function(l, r) {
  const sieve = n => {
    const is_prime = new Array(n + 1).fill(true);
    is_prime[0] = is_prime[1] = false;
    const primes = [];
    for (let i = 2; i * i <= n; ++i) {
      if (is_prime[i]) {
        for (let j = i * i; j <= n; j += i) {
          is_prime[j] = false;
        }
      }
    }
    for (let i = 2; i <= n; ++i) {
      if (is_prime[i]) primes.push(i);
    }
    return primes;
  };
  const m = Math.floor(Math.sqrt(r));
  const primes = sieve(m);
  const special = primes.filter(a => {
    const v = a * a;
    return v >= l && v <= r;
  });
  return r - l + 1 - special.length;
};

module.exports = nonSpecialCount;
