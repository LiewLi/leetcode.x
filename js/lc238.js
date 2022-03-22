/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const ret = new Array(nums.length).fill(1);
  let left = 1;
  for (let i = 0; i < nums.length; ++i) {
    ret[i] *= left;
    left *= nums[i];
  }

  let right = 1;
  for (let i = nums.length - 1; i >= 0; --i) {
    ret[i] *= right;
    right *= nums[i];
  }

  return ret;
};

console.log(productExceptSelf([1, 2, 3, 4]));
