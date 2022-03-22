/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSubmat = function(mat) {
  let ret = 0;
  for (let i = 0; i < mat.length; ++i) {
    for (let j = 0; j < mat[0].length; ++j) {
      if (mat[i][j]) {
        if (j) mat[i][j] += mat[i][j - 1];
        let width = mat[i][j];
        for (let k = i; k >= 0 && mat[k][j]; --k) {
          width = Math.min(width, mat[k][j]);
          ret += width;
        }
      }
    }
  }

  return ret;
};
