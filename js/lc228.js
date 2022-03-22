/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  if (nums.length <= 0) return [];
  const ret = [];
  let stack = [nums[0]];

  const range = () => {
    if (stack.length === 1) {
      ret.push(`${stack[0]}`);
    } else ret.push(`${stack[0]}->${stack[stack.length - 1]}`);
    stack = [];
  };

  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] !== nums[i - 1] + 1) {
      if (stack.length) {
        range();
      }
    }
    stack.push(nums[i]);
  }
  range();
  return ret;
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
