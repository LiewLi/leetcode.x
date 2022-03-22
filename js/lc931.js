/**
 * @param {number[][]} A
 * @return {number}
 */
// var minFallingPathSum = function(A) {
//   const sum = arr => A.reduce((p, c, idx) => p + c[arr[idx]], 0);
//   let minSum = Number.MAX_SAFE_INTEGER;
//   const _ = arr => {
//     if (arr.length >= A.length) {
//       minSum = Math.min(minSum, sum(arr));
//       return;
//     }

//     if (arr.length === 0) {
//       for (let i = 0; i < A.length; ++i) {
//         _([i]);
//       }
//     } else {
//       let i = arr[arr.length - 1];
//       _([...arr, i]);
//       if (i > 0) _([...arr, i - 1]);
//       if (i + 1 < A.length) _([...arr, i + 1]);
//     }
//   };

//   _([]);

//   return minSum;
// };

var minFallingPathSum = function(A) {
  const N = A.length;
  let dp = new Array(N).fill(0);

  for (let i = 0; i < N; ++i) {
    const tmp = [...dp];
    for (let j = 0; j < N; ++j) {
      tmp[j] = dp[j];
      if (j > 0) tmp[j] = Math.min(tmp[j], dp[j - 1]);
      if (j < N - 1) tmp[j] = Math.min(tmp[j], dp[j + 1]);
      tmp[j] += A[i][j];
    }

    dp = tmp;
  }

  let minSum = Number.MAX_SAFE_INTEGER;
  dp.forEach(a => (minSum = Math.min(minSum, a)));

  return minSum;
};

const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(minFallingPathSum(data));
