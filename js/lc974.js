/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
// var subarraysDivByK = function(A, K) {
//   let dp = new Array(K).fill(0);
//   let cnt = 0;

//   for (const a of A) {
//     const r = ((a % K) + K) % K;
//     const tmp = new Array(K).fill(0);
//     for (let i = 0; i < K; ++i) {
//       tmp[(i + r) % K] = dp[i];
//     }
//     tmp[r]++;
//     dp = tmp;
//     cnt += dp[0];
//   }

//   return cnt;
// };

var subarraysDivByK = function(A, K) {
  const sum = [];
  A.forEach((a, idx) => (sum[idx] = (K + ((a + (sum[idx - 1] || 0)) % K)) % K));

  const cntMap = new Array(K).fill(0);
  for (const s of sum) {
    cntMap[s]++;
  }

  let ret = cntMap[0];
  for (let i = 0; i < K; ++i) ret += (cntMap[i] * (cntMap[i] - 1)) / 2;
  return ret;
};

console.log(subarraysDivByK([7, 4, -10], 5));
