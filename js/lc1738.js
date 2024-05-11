/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthLargestValue = function(matrix, k) {
  const res = [];
  for (let i = 0; i < matrix.length; ++i) {
    for (let j = 0; j < matrix[i].length; ++j) {
      let v = matrix[i][j];
      if (i - 1 >= 0) {
        v ^= matrix[i - 1][j];
      }
      if (j - 1 >= 0) {
        v ^= matrix[i][j - 1];
      }

      if (i - 1 >= 0 && j - 1 >= 0) {
        v ^= matrix[i - 1][j - 1];
      }
      matrix[i][j] = v;
      res.push(v);
    }
  }
  res.sort((a, b) => b - a);
  return res[k - 1];
};

module.exports = kthLargestValue;
