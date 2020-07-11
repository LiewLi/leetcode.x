/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
  const set = new Set(["a", "e", "i", "o", "u"]);
  const arr = s.split("").map(w => (set.has(w) ? 1 : 0));
  let maxSoFar = 0;
  let cnt = 0;
  let ret = 0;
  for (let i = 0; i < arr.length; ++i) {
    if (i < k) {
      maxSoFar += arr[i];
      cnt += arr[i];
    } else {
      cnt += arr[i] - arr[i - k];
      maxSoFar = Math.max(maxSoFar, Math.min(cnt, k));
    }
    ret = Math.max(ret, maxSoFar);
  }

  return ret;
};

console.log(maxVowels("weallloveyou", 7));
