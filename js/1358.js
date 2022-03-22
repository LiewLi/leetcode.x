/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
  let cur = new Array(3).fill(s.length);
  let ret = 0;
  for (let i = s.length - 1; i >= 0; --i) {
    const idx = s.charCodeAt(i) - "a".charCodeAt(0);
    cur = cur.map((a, k) => (k == idx ? i : a));
    ret += s.length - Math.max(...cur);
  }
  return ret;
};

console.log(numberOfSubstrings("abcabc"));
