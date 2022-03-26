/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, k) {
  const ans = [];
  for (let i = 0; i < mat.length; ++i) {
    ans[i] = Array(mat[i].length).fill(0);
    for (let j = 0; j < mat[i].length; ++j) {
      for (let n = -k; n <= k; ++n) {
        for (let m = -k; m <= k; ++m) {
          const r = i + n;
          const c = j + m;
          if (r >= 0 && r < mat.length && c >= 0 && c < mat[i].length) {
            ans[i][j] += mat[r][c];
          }
        }
      }
    }
  }
  return ans;
};

module.exports = matrixBlockSum;
