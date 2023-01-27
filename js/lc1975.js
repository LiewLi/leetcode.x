/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function(matrix) {
  let negCnt = 0;
  let minAbs = Number.MAX_SAFE_INTEGER;
  let sum = 0;
  for (let i = 0; i < matrix.length; ++i) {
    for (let j = 0; j < matrix[i].length; ++j) {
      if (matrix[i][j] <= 0) {
        negCnt++;
      }
      minAbs = Math.min(minAbs, Math.abs(matrix[i][j]));
      sum += Math.abs(matrix[i][j]);
    }
  }

  if (negCnt % 2 == 0) {
    return sum;
  } else {
    return sum - minAbs - minAbs;
  }
};

module.exports = maxMatrixSum;
