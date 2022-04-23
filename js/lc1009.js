/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
  for (let i = 31; i >= 0; --i) {
    if ((1 << i) & n) {
      return (1 << (i + 1)) - n - 1;
    }
  }
  return 1;
};

module.exports = bitwiseComplement;
