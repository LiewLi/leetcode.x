/**
 * @param {string} word
 * @return {number}
 */
var addMinimum = function(word) {
  const stack = [];
  let insertCnt = 0;
  for (let i = 0; i < word.length; ++i) {
    const ch = word.charCodeAt(i) - "a".charCodeAt(0);
    if (stack.length <= 0) {
      for (let i = 0; i < ch; ++i) {
        stack.push(i);
        insertCnt++;
      }
    } else {
      const top = stack[stack.length - 1];
      if (top + 1 != ch) {
        if (ch > top) {
          insertCnt++;
          stack.length = 0;
          continue;
        } else {
          insertCnt += Math.max(0, 3 - stack.length);
          stack.length = 0;
          --i;
          continue;
        }
      }
    }
    stack.push(ch);
    if (ch == 3) {
      stack.length = 0;
    }
  }

  return insertCnt + (stack.length > 0 ? 3 - stack.length : 0);
};

module.exports = addMinimum;
