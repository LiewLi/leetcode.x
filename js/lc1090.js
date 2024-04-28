/**
 * @param {number[]} values
 * @param {number[]} labels
 * @param {number} numWanted
 * @param {number} useLimit
 * @return {number}
 */
var largestValsFromLabels = function(values, labels, numWanted, useLimit) {
  const valArr = values.map((a, idx) => [a, labels[idx]]);
  valArr.sort((a, b) => b[0] - a[0]);
  const limitMap = {};
  let res = 0;
  for (const val of valArr) {
    if (numWanted <= 0) break;
    limitMap[val[1]] = limitMap[val[1]] || 0;
    if (limitMap[val[1]] >= useLimit) {
      continue;
    }
    limitMap[val[1]]++;
    numWanted--;
    res += val[0];
  }

  return res;
};

module.exports = largestValsFromLabels;
