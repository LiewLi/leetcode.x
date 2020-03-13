/**
 * @param {number[]} A
 * @param {number} S
 * @return {number}
 */
var numSubarraysWithSum = function(A, S) {
  const sum = [0];
  A.forEach((a, idx) => (sum[idx + 1] = a + (sum[idx] || 0)));
  const cntMap = {};
  let ret = 0;
  for (const s of sum) {
    ret += cntMap[s] || 0;
    cntMap[s + S] = (cntMap[s + S] || 0) + 1;
  }
  return ret;
};

console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2));
