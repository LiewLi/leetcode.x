/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  const arr = [];
  const N = nums.length;
  for (const n of nums) {
    nums[(n - 1) % N] += N;
  }

  nums.forEach((n, idx) => {
    if (n > 2 * N) arr.push(idx + 1);
  });

  return arr;
};

console.log(findDuplicates([2, 2]));
