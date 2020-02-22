/**
 * @param {number[]} nums
 * @return {number}
 */
// var totalHammingDistance = function(nums) {
//   const _ = (m, n) => {
//     let cnt = 0;
//     for (let i = 0; i < 32; ++i) {
//       if ((m & (1 << i)) !== (n & (1 << i))) cnt++;
//     }
//     return cnt;
//   };

//   let distance = 0;
//   for (let i = 0; i < nums.length; ++i) {
//     for (let j = i + 1; j < nums.length; ++j) {
//       distance += _(nums[i], nums[j]);
//     }
//   }

//   return distance;
// };

var totalHammingDistance = function(nums) {
  const cntArr = new Array(32).fill(0);
  for (const n of nums) {
    for (let i = 0; i < 32; ++i) {
      if (n & (1 << i)) cntArr[i]++;
    }
  }
  return cntArr.reduce((p, c) => p + c * (nums.length - c), 0);
};

console.log(totalHammingDistance([4, 14, 2]));
