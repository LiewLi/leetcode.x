/**
 * @param {number[]} nums
 * @return {number}
 */
// var lengthOfLIS = function(nums) {
//   let maxLen = 0;
//   const dp = new Array(nums.length).fill(0);

//   for (let i = 0; i < nums.length; ++i) {
//     dp[i] = 1;
//     for (let j = i - 1; j >= 0; --j) {
//       if (nums[i] > nums[j]) {
//         dp[i] = Math.max(dp[i], dp[j] + 1);
//       }
//     }
//     maxLen = Math.max(maxLen, dp[i]);
//   }

//   return maxLen;
// };

var lengthOfLIS = function(nums) {
  const stack = [];

  for (const n of nums) {
    let j = stack.length - 1;
    if (!stack.length || n > stack[j]) {
      stack.push(n);
      continue;
    }
    while (j >= 0 && stack[--j] >= n);
    stack[j + 1] = n;
  }

  return stack.length;
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
