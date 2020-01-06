/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  for (let i = 0; i < nums.length; ++i) {
    let e = nums[i];
    if (e < 0) e = -e;
    if (nums[e - 1] > 0) nums[e - 1] = -nums[e - 1];
  }

  const ret = [];
  for (let i = 1; i <= nums.length; ++i) {
    if (nums[i - 1] > 0) ret.push(i);
  }

  return ret;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
