/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var find132pattern = function(nums) {
//   if (nums.length < 3) return false;
//   const stack = [[nums[0]]];
//   for (let i = 1; i < nums.length; ++i) {
//     const n = nums[i];
//     let flag = false;
//     for (let k = stack.length - 1; k >= 0; --k) {
//       if (stack[k].length < 2) {
//         if (stack[k][0] < n) {
//           stack[k].push(n);
//         } else if (stack[k][0] > n) {
//           stack[k][0] = n;
//         }
//       } else {
//         if (stack[k][1] > n && stack[k][0] < n) return true;
//         else if (stack[k][1] < n) stack[k][1] = n;
//         else if (stack[k][0] < n) flag = true;
//       }
//     }
//     if (!flag) stack.push([n]);
//   }
//   return false;
// };

var find132pattern = function(nums) {
  let min = Number.MIN_SAFE_INTEGER;
  const stack = [];
  for (let i = nums.length - 1; i >= 0; --i) {
    if (nums[i] < min) return true;
    while (stack.length && stack[stack.length - 1] < nums[i]) {
      min = stack.pop();
    }
    stack.push(nums[i]);
  }
  return false;
};

console.log(find132pattern([-2, 1, 2, -2, 1, 2]));
