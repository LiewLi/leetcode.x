/**
 * @param {number[]} nums
 * @param {number} modulo
 * @param {number} k
 * @return {number}
 */
var countInterestingSubarrays = function(nums, modulo, k) {
  let res = 0;
  const arr = [];
  let numSoFar = 0;
  if (modulo == 1) {
    return (nums.length * (nums.length + 1)) / 2;
  }
  for (let i = 0; i < nums.length; ++i) {
    let c = 0;
    if (nums[i] % modulo == k) {
      arr.push(i);
      for (let n = arr.length - (k == 0 ? modulo : k); n >= 0; n -= modulo) {
        c += arr[n] - (n > 0 ? arr[n - 1] : -1);
      }
    } else {
      c = k == 0 ? numSoFar + 1 : numSoFar;
    }
    numSoFar = c;
    res += c;
  }
  return res;
};

module.exports = countInterestingSubarrays;
