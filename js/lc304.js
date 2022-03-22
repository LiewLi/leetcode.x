/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  this.matrix = matrix;
  const M = matrix.length;
  const N = M ? matrix[0].length : 0;
  const dp = new Array(M).fill(0);
  for (let i = 0; i < M; ++i) {
    dp[i] = new Array(N).fill(0);
  }

  let sum = 0;
  for (let i = 0; i < M; ++i) {
    for (let j = 0; j < N; ++j) {
      sum += matrix[i][j];
      dp[i][j] = sum - (i > 0 ? dp[i - 1][N - 1] - dp[i - 1][j] : 0);
    }
  }

  this.dp = dp;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  let ret = this.dp[row2][col2];
  if (col1 > 0) ret -= this.dp[row2][col1 - 1];

  if (row1 > 0) ret -= this.dp[row1 - 1][col2];

  if (row1 > 0 && col1 > 0) ret += this.dp[row1 - 1][col1 - 1];

  return ret;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
