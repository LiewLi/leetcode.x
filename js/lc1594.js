/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxProductPath = function(grid) {
  const m = grid.length;
  const n = grid[0].length;

  let maxVal = -1;
  const dp = (i, j, pre) => {
    const v = grid[i][j];
    if (v == 0) {
      maxVal = Math.max(maxVal, 0);
      return;
    }

    pre *= v;

    if (i == m - 1 && j == n - 1) {
      maxVal = Math.max(maxVal, pre);
      return;
    }

    if (i + 1 < m) {
      dp(i + 1, j, pre);
    }

    if (j + 1 < n) {
      dp(i, j + 1, pre);
    }
  };

  dp(0, 0, 1);
  return maxVal % (1e9 + 7);
};

module.exports = maxProductPath;
