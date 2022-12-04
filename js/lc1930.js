/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
  const map = [];
  for (let i = 0; i < s.length; ++i) {
    const idx = s.charCodeAt(i) - "a".charCodeAt(0);
    map[idx] = map[idx] || [i, i];
    map[idx][1] = i;
  }

  let res = 0;
  for (let k = 0; k < s.length; ++k) {
    const idx = s.charCodeAt(k) - "a".charCodeAt(0);
    for (let i = 0; i < 26; ++i) {
      if (map[i] && map[i][0] < map[i][1]) {
        map[i][2] = map[i][2] || Array(26).fill(false);
        if (k > map[i][0] && k < map[i][1] && !map[i][2][idx]) {
          map[i][2][idx] = true;
          res += 1;
        }
      }
    }
  }

  return res;
};

module.exports = countPalindromicSubsequence;
