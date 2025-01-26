/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToMakeFair = function(nums) {
  const pre_arr = [
    new Array(nums.length).fill(0),
    new Array(nums.length).fill(0)
  ];
  const suf_arr = [
    new Array(nums.length).fill(0),
    new Array(nums.length).fill(0)
  ];
  for (let i = 0; i < nums.length; ++i) {
    const idx = i % 2;
    pre_arr[idx][i] = nums[i] + (i - 2 >= 0 ? pre_arr[idx][i - 2] : 0);
    if (i > 0) {
      pre_arr[1 - idx][i] = pre_arr[1 - idx][i - 1];
    }
  }
  for (let i = nums.length - 1; i >= 0; --i) {
    const idx = (nums.length - 1 - i) % 2;
    suf_arr[idx][i] = nums[i] + (i + 2 < nums.length ? suf_arr[idx][i + 2] : 0);
    if (i + 1 < nums.length) {
      suf_arr[1 - idx][i] = suf_arr[1 - idx][i + 1];
    }
  }

  let res = 0;
  for (let i = 0; i < nums.length; ++i) {
    const pre_is_odd = i % 2;
    const suf_is_odd = (nums.length - 1 - i) % 2;
    let odd = 0;
    let even = 0;
    if (pre_is_odd) {
      odd += pre_arr[1][i] - nums[i];
      even += pre_arr[0][i];
      if (suf_is_odd) {
        odd += suf_arr[0][i];
        even += suf_arr[1][i] - nums[i];
      } else {
        odd += suf_arr[1][i];
        even += suf_arr[0][i] - nums[i];
      }
    } else {
      odd += pre_arr[1][i];
      even += pre_arr[0][i] - nums[i];
      if (suf_is_odd) {
        even += suf_arr[0][i];
        odd += suf_arr[1][i] - nums[i];
      } else {
        even += suf_arr[1][i];
        odd += suf_arr[0][i] - nums[i];
      }
    }

    res += even == odd ? 1 : 0;
  }
  return res;
};
module.exports = waysToMakeFair;
