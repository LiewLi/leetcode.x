/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function(p) {
  const map = {};
  let maxLen = 0;
  for (let i = 0; i < p.length; ++i) {
    if (
      i &&
      (p.charCodeAt(i) - p.charCodeAt(i - 1) === 1 ||
        (p[i] === "a" && p[i - 1] === "z"))
    )
      maxLen++;
    else maxLen = 1;
    map[p[i]] = Math.max(map[p[i]] || 0, maxLen);
  }

  return Object.values(map).reduce((p, c) => p + c, 0);
};
