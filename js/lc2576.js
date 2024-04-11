/**
 * @param {number[]} nums
 * @return {number}
 */
var maxNumOfMarkedIndices = function(nums) {
  let res = 0;
  nums.sort((a, b) => a - b);
  const N = Math.floor(nums.length / 2);
  let j = N;
  for (let i = 0; i < N; ++i) {
    while (j < nums.length && nums[i] + nums[i] > nums[j]) {
      ++j;
    }
    if (j < nums.length && nums[i] + nums[i] <= nums[j]) {
      res += 2;
      ++j;
    }

    if (j >= nums.length) {
      break;
    }
  }
  return res;
};

module.exports = maxNumOfMarkedIndices;
