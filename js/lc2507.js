/**
 * @param {number} n
 * @return {number}
 */
var smallestValue = function(n) {
  if (n <= 2) {
    return n;
  }
  let isPrime = true;
  let sum = 0;
  let k = 2;
  let m = n;
  while (k <= m && k < n) {
    while (m % k == 0) {
      sum += k;
      isPrime = false;
      m /= k;
    }
    ++k;
  }

  if (isPrime || sum >= n) {
    return n;
  } else {
    return smallestValue(sum);
  }
};

module.exports = smallestValue;
