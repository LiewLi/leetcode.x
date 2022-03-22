/**
 * @param {string} s
 * @return {number}
 */
var numSub = function(s) {
  return s
    .split("0")
    .filter(Boolean)
    .map(a => a.length)
    .reduce((p, c) => (p + (c * (c + 1)) / 2) % (10 ** 9 + 7), 0);
};

console.log(numSub("0110111"));
