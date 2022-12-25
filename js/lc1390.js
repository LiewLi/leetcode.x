/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
  const MaxD = 4;
  const sumOf = n => {
    let sum = 0;
    let cnt = 0;
    const limit = Math.sqrt(n);
    for (let i = 1; i <= limit; ++i) {
      if (n % i == 0) {
        sum += i;
        cnt += 1;
        if (n != i * i) {
          sum += n / i;
          cnt += 1;
        }
        if (cnt > MaxD) break;
      }
    }
    return cnt == MaxD ? sum : 0;
  };

  let res = 0;
  for (const n of nums) {
    res += sumOf(n);
  }
  return res;
};

module.exports = sumFourDivisors;
