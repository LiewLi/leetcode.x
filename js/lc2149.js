/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
  const positive = nums.filter(a => a >= 0);
  const negtive = nums.filter(a => a < 0);
  const res = [];
  for (let i = 0; i < positive.length; ++i) {
    res.push(positive[i]);
    res.push(negtive[i]);
  }
  return res;
};

module.exports = rearrangeArray;
