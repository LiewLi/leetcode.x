/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function(S, words) {
  function decompose(s) {
    const ret = [];
    let cnt = 1;
    for (let i = 1; i < s.length; ++i) {
      if (s[i] != s[i - 1]) {
        ret.push([s[i - 1], cnt]);
        cnt = 1;
      } else cnt++;
    }
    ret.push([s[s.length - 1], cnt]);
    return ret;
  }

  function isStretchy(s, t) {
    if (s.length != t.length) return false;
    for (let i = 0; i < s.length; ++i) {
      if (
        s[i][0] !== t[i][0] ||
        s[i][1] < t[i][1] ||
        (s[i][1] !== t[i][1] && s[i][1] < 3)
      ) {
        return false;
      }
    }
    return true;
  }

  const d = decompose(S);

  return words
    .map(w => decompose(w))
    .reduce((acc, cur) => (isStretchy(d, cur) ? acc + 1 : acc), 0);
};

console.log(expressiveWords("heeellooo", ["hello", "hi", "helo"]));
