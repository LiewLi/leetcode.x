/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
  const map = Array(26);
  for (let i = 0; i < 26; ++i) {
    map[i] = [];
  }
  for (let i = 0; i < s.length; ++i) {
    const idx = s.charCodeAt(i) - "a".charCodeAt(0);
    map[idx] = map[idx] || [];
    map[idx].push(i);
  }
  let ans = 0;
  for (const w of words) {
    let idx = -1;
    let i = 0;
    const curMap = Array(26).fill(0);
    for (; i < w.length; ++i) {
      const j = w.charCodeAt(i) - "a".charCodeAt(0);
      const old = idx;
      for (let k = curMap[j]; k < map[j].length; ++k) {
        if (map[j][k] > idx) {
          idx = map[j][k];
          curMap[j] = k + 1;
          break;
        }
      }
      if (old == idx) break;
    }
    if (i >= w.length) {
      ans++;
    }
  }
  return ans;
};

module.exports = numMatchingSubseq;
