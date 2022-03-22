/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function(matrix) {
  let maxN = 0;
  const cntMap = {};
  for (const row of matrix) {
    const r = row.join("");
    const flip = row.map(m => (m ? 0 : 1)).join("");
    cntMap[r] = (cntMap[r] || 0) + 1;
    cntMap[flip] = (cntMap[flip] || 0) + 1;
    maxN = Math.max(maxN, cntMap[r]);
    maxN = Math.max(maxN, cntMap[flip]);
  }

  return maxN;
};
