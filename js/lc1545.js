/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function(n, k) {
  const _helper = (n, k, invert) => {
    if (n == 1) return invert ? "1" : "0";
    const mid = 2 ** (n - 1);
    if (k == mid) return invert ? "0" : "1";
    else if (k < mid) return _helper(n - 1, k, invert);
    else return _helper(n - 1, mid + mid - k, !invert);
  };
  return _helper(n, k, false);
};

module.exports = findKthBit;
