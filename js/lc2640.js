/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findPrefixScore = function(nums) {
  const res = [];
  let maxSoFar = 0;
  let sumSoFar = 0;
  for (const n of nums) {
    maxSoFar = Math.max(maxSoFar, n);
    sumSoFar += maxSoFar + n;
    res.push(sumSoFar);
  }
  return res;
};

module.exports = findPrefixScore;
