/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
  let i = 0;
  const set = new Set();
  while (i + k <= s.length) {
    set.add(s.substring(i, i + k));
    ++i;
  }
  return set.size == 2 ** k;
};

console.log(hasAllCodes("00110110", 2));
