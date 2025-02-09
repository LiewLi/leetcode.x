/**
 * @param {number[]} nums
 * @return {number}
 */
var minDeletion = function(nums) {
  const res = [];
  for (const n of nums) {
    if (res.length % 2 == 0 || n != res[res.length - 1]) {
      res.push(n);
    }
  }
  return nums.length - (res.length - (res.length % 2));
};

module.exports = minDeletion;
