/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function(properties) {
  properties.sort((a, b) => a[0] - b[0]);
  let res = 0;
  const arr = Array(properties.length).fill(0);
  let maxSoFar = 0;
  for (let i = properties.length - 1; i >= 0; --i) {
    maxSoFar = Math.max(properties[i][1], maxSoFar);
    arr[i] = maxSoFar;
  }

  for (let i = 0; i < properties.length; ++i) {
    let k = i;
    while (k < properties.length && properties[k][0] <= properties[i][0]) {
      ++k;
    }
    if (k < properties.length && arr[k] > properties[i][1]) {
      ++res;
    }
  }
  return res;
};

module.exports = numberOfWeakCharacters;
