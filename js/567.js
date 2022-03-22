/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  const arr = new Array(26).fill(0);
  const base = "a".charCodeAt(0);
  for (const ch of s1) {
    const idx = ch.charCodeAt(0) - base;
    arr[idx]++;
  }

  let s = 0;
  let e = 0;
  const _ = () => arr.every(a => a === 0);
  while (s <= e && e < s2.length) {
    const idx = s2.charCodeAt(e) - base;
    --arr[idx];
    if (_()) return true;
    while (arr[idx] < 0 || e - s + 1 > s1.length) {
      arr[s2.charCodeAt(s++) - base]++;
    }
    e++;
  }
  return false;
};

console.log(checkInclusion("ab", "eidboaoo"));
