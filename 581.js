/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  const tmp = [...nums];
  tmp.sort((a, b) => a - b);
  let i = 0;
  let j = nums.length - 1;
  while (i <= j && nums[i] === tmp[i]) ++i;
  while (i <= j && nums[j] === tmp[j]) --j;
  return j - i + 1;
};

console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));
