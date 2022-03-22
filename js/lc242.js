/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const arr = new Array(26).fill(0);
  for (let i = 0; i < s.length; ++i) {
    arr[s.charCodeAt(i) - "a".charCodeAt(0)]++;
  }

  for (let i = 0; i < t.length; ++i) {
    arr[t.charCodeAt(i) - "a".charCodeAt(0)]--;
  }

  return arr.every(e => e === 0);
};
