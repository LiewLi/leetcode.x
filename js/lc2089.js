/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
  let lessCnt = 0;
  let equalCnt = 0;
  for (const n of nums) {
    if (n < target) {
      lessCnt += 1;
    } else if (n == target) {
      equalCnt += 1;
    }
  }
  const res = [];
  for (let i = lessCnt; i < lessCnt + equalCnt; ++i) {
    res.push(i);
  }
  return res;
};

module.exports = targetIndices;
