/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
  if (nums.length <= 0) return;
  nums.sort((a, b) => a - b);
  const tmp = [...nums];
  console.log(tmp);
  const pivot = Math.floor((nums.length - 1) / 2);
  let k = 0;
  let i = pivot;
  let j = nums.length - 1;
  while (k < nums.length) {
    if (k & 1) {
      nums[k++] = tmp[j--];
    } else {
      nums[k++] = tmp[i--];
    }
  }
};

const nums = [4, 5, 5, 6];
console.log(nums);
wiggleSort(nums);
console.log(nums);
