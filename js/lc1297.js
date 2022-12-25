/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */
var maxFreq = function(s, maxLetters, minSize, maxSize) {
  let res = 0;
  const freqMap = Array(maxSize - minSize + 1);
  for (let k = 0; k < maxSize - minSize + 1; ++k) {
    freqMap[k] = Array(26).fill(0);
  }
  const letterCntArr = Array(maxSize - minSize + 1).fill(0);
  const strMap = {};

  for (let i = 0; i < maxSize; ++i) {
    const idx = s.charCodeAt(i) - "a".charCodeAt(0);
    for (let k = 0; k < maxSize - minSize + 1; ++k) {
      if (i < k + minSize) {
        freqMap[k][idx] += 1;
        if (freqMap[k][idx] == 1) {
          letterCntArr[k] += 1;
        }
      }
    }

    const k = i < minSize ? 0 : i - minSize + 1;

    if (i + 1 >= minSize && letterCntArr[k] <= maxLetters) {
      strMap[s.substring(0, i + 1)] = 1;
      res = 1;
    }
  }

  for (let i = 1; i + minSize <= s.length; ++i) {
    const idx = s.charCodeAt(i - 1) - "a".charCodeAt(0);
    for (let k = 0; k < maxSize - minSize + 1; ++k) {
      const end = i + minSize + k;
      if (end > s.length) continue;
      freqMap[k][idx] -= 1;
      if (freqMap[k][idx] == 0) {
        letterCntArr[k] -= 1;
      }
      const nIdx = s.charCodeAt(end - 1) - "a".charCodeAt(0);
      freqMap[k][nIdx] += 1;
      if (freqMap[k][nIdx] == 1) {
        letterCntArr[k] += 1;
      }
      if (letterCntArr[k] <= maxLetters) {
        const str = s.substring(i, end);
        strMap[str] = strMap[str] || 0;
        strMap[str] += 1;
        res = Math.max(res, strMap[str]);
      }
    }
  }

  return res;
};

module.exports = maxFreq;
