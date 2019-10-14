/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  let minN = Number.MAX_SAFE_INTEGER;
  if (nums.length <= 0) return 0;
  let start = 0;
  let end = 0;
  let sum = nums[start];
  while (end < nums.length) {
    if (sum >= s) {
      minN = Math.min(minN, end - start + 1);
      sum -= nums[start++];
    } else {
      sum += nums[++end];
    }
  }

  return minN === Number.MAX_SAFE_INTEGER ? 0 : minN;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
