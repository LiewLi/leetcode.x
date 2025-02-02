/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function(nums) {
  const zeros = [];
  const neg_cnt = new Array(nums.length).fill(0);
  let n = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] == 0) {
      zeros.push(i);
    } else if (nums[i] < 0) {
      ++n;
    }
    neg_cnt[i] = n;
  }
  const max_len_helper = (i, j) => {
    if ((neg_cnt[j] - (i > 0 ? neg_cnt[i - 1] : 0)) % 2 == 0) {
      return j - i + 1;
    } else {
      let res = 0;
      let left = i;
      for (; left <= j; ++left) {
        if (nums[left] < 0) {
          res = Math.max(res, left - i);
          res = Math.max(res, j - left);
          break;
        }
      }
      let right = j;
      for (; right >= i; --right) {
        if (nums[right] < 0) {
          res = Math.max(res, j - right);
          res = Math.max(res, right - i);
          break;
        }
      }
      return res;
    }
  };

  let res = 0;
  let s = 0;
  let e = nums.length - 1;
  let zIdx = 0;
  while (zIdx < zeros.length) {
    const z = zeros[zIdx++];
    e = z - 1;
    if (e >= s) {
      res = Math.max(res, max_len_helper(s, e));
    }
    s = z + 1;
    e = nums.length - 1;
  }

  if (e >= s) {
    res = Math.max(res, max_len_helper(s, e));
  }

  return res;
};

module.exports = getMaxLen;
