/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// var isPossibleDivide = function(nums, k) {
//   if (nums.length % k) return false;
//   const arr = [[]];
//   nums.sort((a, b) => a - b);
//   for (let i = 0; i < nums.length; ++i) {
//     let flag = false;
//     for (let j = 0; j < arr.length; ++j) {
//       if (arr[j].length == 0) {
//         arr[j].push(nums[i]);
//         flag = true;
//         break;
//       } else if (arr[j][arr[j].length - 1] + 1 == nums[i]) {
//         arr[j].push(nums[i]);
//         flag = true;
//         if (arr[j].length >= k) {
//           arr.splice(j, 1);
//         }
//         break;
//       } else if (arr[j][0] + k <= nums[i]) {
//         return false;
//       }
//     }

//     if (!flag) {
//       arr.push([nums[i]]);
//     }
//   }
//   return !arr.length;
// };

var isPossibleDivide = function(nums, k) {
  if (nums.length % k) return false;
  const map = {};
  nums.sort((a, b) => a - b);
  nums.forEach(n => {
    map[n] = (map[n] || 0) + 1;
  });
  for (const n of nums) {
    if (map[n] < 0) return false;
    else if (map[n] == 0) continue;
    const cnt = map[n];
    for (let i = 0; i < k; ++i) {
      if (!map[n + i]) return false;
      map[n + i] -= cnt;
    }
  }
  return Object.values(map).every(n => !n);
};

console.log(isPossibleDivide([2, 4, 6], 3));
