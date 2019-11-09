/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var kConcatenationMaxSum = function(arr, k) {
  const MOD = 10 ** 9 + 7;
  let maxSoFar = 0;
  let maxArr = 0;
  let sum = 0;
  let maxArrFromZero = 0;
  for (let i = 0; i < arr.length; ++i) {
    sum += arr[i];
    maxArrFromZero = Math.max(sum, maxArrFromZero);
    if (maxSoFar + arr[i] < 0) maxSoFar = 0;
    else maxSoFar += arr[i];
    maxArr = Math.max(maxArr, maxSoFar);
  }

  let s = maxArrFromZero + maxSoFar;

  if (sum > 0) {
    let flag = false;
    for (let i = 0; i < k - 2; ++i) {
      s += sum;
      if (s > maxArr) {
        flag = true;
        s %= MOD;
      }
    }
    return flag ? s : maxArr;
  } else return Math.max(s, maxArr);
};

console.log(kConcatenationMaxSum([1, 2], 3));
