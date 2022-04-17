/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumSwap = function(s1, s2) {
  if (s1.length != s2.length) return -1;
  let x = 0;
  let y = 0;
  for (let i = 0; i < s1.length; ++i) {
    if (s1.charCodeAt(i) == s2.charCodeAt(i)) continue;
    else {
      if (s1.charCodeAt(i) == "x".charCodeAt(0)) x += 1;
      else y += 1;
    }
  }

  if (x % 2 != y % 2) return -1;
  if (x % 2 == 0) {
    return (x >> 1) + (y >> 1);
  } else {
    return (x >> 1) + (y >> 1) + 2;
  }
};

module.exports = minimumSwap;
