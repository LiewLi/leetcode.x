/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function(s1, s2, baseStr) {
  const _parent = {};
  for (let i = 0; i < 26; ++i) {
    const ch = String.fromCharCode("a".charCodeAt(0) + i);
    _parent[ch] = ch;
  }
  const _find_root = ch => {
    while (_parent[ch] != ch) {
      ch = _parent[ch];
    }
    return ch;
  };
  for (let i = 0; i < s1.length; ++i) {
    const p1 = _find_root(s1[i]);
    const p2 = _find_root(s2[i]);
    if (p1 < p2) {
      _parent[p2] = p1;
    } else {
      _parent[p1] = p2;
    }
  }

  return baseStr
    .split("")
    .map(ch => _find_root(ch))
    .join("");
};

module.exports = smallestEquivalentString;
