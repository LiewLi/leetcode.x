/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
  nums.sort((a, b) => {
    return a - b;
  });
  let cnt = 0;
  for (let i = 0; i < nums.length - 2; ++i) {
    if (nums[i] <= 0) continue;
    for (let j = i + 1; j < nums.length - 1; ++j) {
      let k = i + 2;
      while (nums[i] + nums[j] > nums[k] && k < nums.length) k++;
      cnt += k - j - 1;
    }
  }
  return cnt;
};

console.log(triangleNumber([0, 1, 1, 1]));
