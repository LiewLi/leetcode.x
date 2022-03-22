/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  const N = matrix.length;
  let low = matrix[0][0];
  let high = matrix[N - 1][N - 1] + 1;
  while (low < high) {
    const mid = low + Math.floor((high - low) / 2);
    let cnt = 0;
    for (let i = 0; i < N; ++i) {
      let j = N - 1;
      while (j >= 0 && matrix[i][j] > mid) j--;
      cnt += j + 1;
    }
    if (cnt < k) low = mid + 1;
    else high = mid;
  }

  return low;
};

console.log(kthSmallest([[1, 2, 3], [6, 9, 11], [12, 13, 18]], 5));
