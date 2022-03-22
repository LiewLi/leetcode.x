/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
  const src = [];
  const dst = [];
  for (let i = 0; i < s.length; ++i) {
    const sidx = s.charCodeAt(i) - "a".charCodeAt(0);
    const didx = t.charCodeAt(i) - "a".charCodeAt(0);
    src[sidx] = (src[sidx] || 0) + 1;
    dst[didx] = (dst[didx] || 0) + 1;
  }
  let ret = 0;
  for (let i = 0; i < 26; ++i) {
    ret += Math.max(0, (dst[i] || 0) - (src[i] || 0));
  }

  return ret;
};

console.log(minSteps("bab", "aba"));
