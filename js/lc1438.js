/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
  let res = 0;
  let i = 0;
  let j = 0;
  const maxQ = [];
  const minQ = [];
  while (j < nums.length) {
    while (maxQ.length > 0 && maxQ[maxQ.length - 1] < nums[j]) {
      maxQ.pop();
    }
    while (minQ.length > 0 && minQ[minQ.length - 1] > nums[j]) {
      minQ.pop();
    }
    maxQ.push(nums[j]);
    minQ.push(nums[j]);
    while (maxQ[0] - minQ[0] > limit) {
      if (maxQ[0] == nums[i]) {
        maxQ.shift();
      }
      if (minQ[0] == nums[i]) {
        minQ.shift();
      }
      ++i;
    }
    res = Math.max(res, j - i + 1);
    ++j;
  }
  return res;
};

module.exports = longestSubarray;
