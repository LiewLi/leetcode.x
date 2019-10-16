/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
  const N = 26;
  let maxLen = 0;
  for (let h = 1; h <= 26; ++h) {
    const freqCnt = new Array(N).fill(0);
    let start = 0;
    let end = 0;
    let uniqCnt = 0;
    let uniqCntThanK = 0;
    while (end < s.length) {
      if (uniqCnt <= h) {
        const idx = s.charCodeAt(end) - "a".charCodeAt(0);
        if (++freqCnt[idx] == k) {
          uniqCntThanK++;
        }
        if (freqCnt[idx] == 1) {
          uniqCnt++;
        }
        end++;
      } else {
        const idx = s.charCodeAt(start) - "a".charCodeAt(0);
        if (freqCnt[idx] == k) {
          uniqCntThanK--;
        }
        if (--freqCnt[idx] == 0) {
          uniqCnt--;
        }
        start++;
      }

      if (uniqCnt == h && uniqCntThanK == h) {
        maxLen = Math.max(maxLen, end - start);
      }
    }
  }

  return maxLen;
};

console.log(longestSubstring("bbaaacbd", 3));
