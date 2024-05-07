/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
var repeatLimitedString = function(s, repeatLimit) {
  const cntMap = new Array(26).fill(0);
  const base = "a".charCodeAt(0);
  for (let i = 0; i < s.length; ++i) {
    const idx = s.charCodeAt(i) - base;
    cntMap[idx]++;
  }
  let curIdx = 25;
  let res = "";
  let repeat = repeatLimit;
  while (curIdx >= 0) {
    const cnt = Math.min(cntMap[curIdx], repeat);
    if (cnt > 0) {
      const str = String.fromCharCode(curIdx + base);
      res += str.repeat(cnt);
      cntMap[curIdx] -= cnt;
    }
    let idx = 26;
    for (; idx >= 0; --idx) {
      if (cntMap[idx] > 0) break;
    }
    if (idx < 0) break;
    if (idx > curIdx) {
      repeat = repeatLimit;
      curIdx = idx;
    } else {
      repeat = curIdx == idx ? 1 : repeatLimit;
      curIdx--;
      while (curIdx >= 0 && cntMap[curIdx] <= 0) curIdx--;
    }
  }
  return res;
};

module.exports = repeatLimitedString;
