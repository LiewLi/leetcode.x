/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function(n) {
  while (n) {
    const m = n % 3;
    if (!(m == 0 || m == 1)) return false;
    n = (n - m) / 3;
  }
  return true;
};

module.exports = checkPowersOfThree;
