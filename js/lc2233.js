/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumProduct = function(nums, k) {
  if (nums.length <= 0) return 0;
  if (nums.length == 1) return nums[0] + k;
  const MOD = 10 ** 9 + 7;
  nums.sort((a, b) => a - b);
  const cnt_arr = new Array(nums.length).fill(1);
  let prod = 1;
  let i = 1;
  const _prod_helper = (idx, k) => {
    console.log("helper", idx, k, nums, cnt_arr);
    const n = Math.floor(k / cnt_arr[idx]);
    const m = k % cnt_arr[idx];
    nums[idx] += n;
    let i = 0;
    while (i < cnt_arr[idx]) {
      prod *= nums[idx] + (i < m ? 1 : 0);
      prod %= MOD;
      ++i;
    }
  };
  for (; i < nums.length && k > 0; ++i) {
    const d = nums[i] - nums[i - 1];
    if (d == 0 || d * cnt_arr[i - 1] <= k) {
      k -= d * cnt_arr[i - 1];
      cnt_arr[i] += cnt_arr[i - 1];
      cnt_arr[i - 1] = 0;
    } else {
      _prod_helper(i - 1, k);
      k = 0;
    }
    if (k == 0) break;
  }

  if (k > 0) {
    _prod_helper(nums.length - 1, k);
  }
  for (; i < nums.length; ++i) {
    while (cnt_arr[i] > 0) {
      prod *= nums[i];
      prod %= MOD;
      cnt_arr[i]--;
    }
  }
  return prod;
};

module.exports = maximumProduct;
