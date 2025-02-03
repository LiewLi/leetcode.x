/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  const stack = [];
  const N = nums.length;
  const res = new Array(nums.length).fill(-1);
  for (let i = 0; i < 2 * N; ++i) {
    while (stack.length > 0 && nums[i % N] > nums[stack[stack.length - 1]]) {
      const idx = stack.pop();
      res[idx] = nums[i % N];
    }
    stack.push(i % N);
  }
  return res;
};
module.exports = nextGreaterElements;
