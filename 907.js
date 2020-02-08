/**
 * @param {number[]} A
 * @return {number}
 */
// var sumSubarrayMins = function(A) {
//   const MOD = Math.pow(10, 9) + 7;
//   const arr = [];
//   let m = Number.MAX_SAFE_INTEGER;
//   for (let i = A.length - 1; i >= 0; --i) {
//     m = Math.min(m, arr[i]);
//     arr[i] = m;
//   }
//   let sum = 0;
//   for (let i = 0; i < A.length; ++i) {
//     let minN = A[i];
//     for (let j = i; j < A.length; ++j) {
//       minN = Math.min(minN, A[j]);
//       sum += minN;
//       sum %= MOD;
//     }
//   }
//   return sum;
// };

var sumSubarrayMins = function(A) {
  const MOD = 1000000007;
  let ret = 0;
  let sum = 0;
  const stack = [];
  for (const a of A) {
    let cnt = 1;
    while (stack.length && stack[stack.length - 1][0] > a) {
      const node = stack.pop();
      cnt += node[1];
      sum -= node[1] * node[0];
    }
    stack.push([a, cnt]);
    sum += a * cnt;
    ret += sum;
    ret %= MOD;
  }
  return ret;
};

console.log(sumSubarrayMins([3, 1, 2, 4]));
