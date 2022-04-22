/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function(words) {
  const map = {};
  words.forEach(w => (map[w] = (map[w] || 0) + 1));
  let maxCnt = 0;
  let extra = 0;
  for (const [key, val] of Object.entries(map)) {
    if (key[0] == key[1]) {
      maxCnt += (val >> 1) * 4;
      extra = extra || val % 2;
    } else {
      const w = key
        .split("")
        .reverse()
        .join("");
      maxCnt += 2 * Math.min(val, map[w] || 0);
    }
  }
  return maxCnt + (extra << 1);
};

module.exports = longestPalindrome;
