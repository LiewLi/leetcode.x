/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  let maxN = 0;
  let uniqueCnt = 0;
  let start = 0;
  let end = 0;
  const arr = new Array(26).fill(0);
  for (end = 0; end < s.length; ++end) {
    uniqueCnt = Math.max(
      uniqueCnt,
      ++arr[s.charCodeAt(end) - "A".charCodeAt(0)]
    );
    if (end - start + 1 - uniqueCnt > k) {
      arr[s.charCodeAt(start++) - "A".charCodeAt(0)]--;
    } else {
      maxN = Math.max(maxN, end - start + 1);
    }
  }

  return maxN;
};
