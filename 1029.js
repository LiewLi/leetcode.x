/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
  let flag = true;
  while (flag) {
    let ret = "";
    flag = false;
    let dup = 1;
    for (let i = 1; i < s.length; ++i) {
      if (s[i] == s[i - 1]) dup++;
      else {
        ret += s.substring(i - dup, i - dup + (dup % k));
        flag = flag || dup >= k;
        dup = 1;
      }
    }
    s = ret + s.substring(s.length - (dup % k));
  }
  return s;
};

console.log(removeDuplicates("yfttttfbbbbnnnnffbgffffgbbbbgssssgthyyyy", 4));
