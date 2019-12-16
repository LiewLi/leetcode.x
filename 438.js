/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const map = new Array(26).fill(0);
  for (const ch of p) {
    map[ch.charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  const isEqual = (arr1, arr2) => arr1.every((e, idx) => e === arr2[idx]);

  let i = 0;
  let j = 0;
  const tmp = new Array(26).fill(0);
  const ret = [];
  for (; j < s.length; ++j) {
    tmp[s.charCodeAt(j) - "a".charCodeAt(0)]++;
    if (j - i + 1 === p.length) {
      if (isEqual(tmp, map)) ret.push(i);
      tmp[s.charCodeAt(i) - "a".charCodeAt(0)]--;
      i++;
    }
  }

  return ret;
};

console.log(findAnagrams("cbaebabacd", "abc"));
