/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctPrimeFactors = function(nums) {
  nums.sort((a, b) => a - b);
  const prime = [2];
  const _is_prime = n => {
    return !prime.some(p => n % p == 0);
  };
  for (let n = 3; n <= nums[nums.length - 1]; ++n) {
    if (_is_prime(n)) {
      prime.push(n);
    }
  }

  let res = 0;
  for (const p of prime) {
    res += nums.some(n => n % p == 0) ? 1 : 0;
  }
  return res;
};
module.exports = distinctPrimeFactors;
