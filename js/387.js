/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const freqCnt = new Array(26).fill(0);
  for (let i = 0; i < s.length; ++i) {
    const idx = s.charCodeAt(i) - "a".charCodeAt(0);
    freqCnt[idx]++;
  }

  for (let i = 0; i < s.length; ++i) {
    const idx = s.charCodeAt(i) - "a".charCodeAt(0);
    if (freqCnt[idx] == 1) {
      return i;
    }
  }

  return -1;
};
