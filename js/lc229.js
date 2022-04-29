/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  nums.sort((a, b) => a - b);
  const ans = [];

  let s = 0;
  let e = 0;
  while (e < nums.length) {
    if (nums[e] == nums[s]) {
      e += 1;
    } else {
      if (e - s > Math.floor(nums.length / 3)) {
        ans.push(nums[s]);
      }
      s = e;
    }
  }

  if (e - s > Math.floor(nums.length / 3)) {
    ans.push(nums[s]);
  }
  return ans;
};

module.exports = majorityElement;
