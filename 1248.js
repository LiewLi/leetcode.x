/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
  let ret = 0;
  const arr = [0];
  const map = {};
  map[0] = 1;
  for (let i = 1; i <= nums.length; ++i) {
    if (nums[i - 1] % 2 == 0) {
      arr[i] = arr[i - 1];
    } else {
      arr[i] = arr[i - 1] + 1;
    }

    ret += map[arr[i] - k] || 0;

    map[arr[i]] = (map[arr[i]] || 0) + 1;
  }
  return ret;
};

console.log(numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2));
