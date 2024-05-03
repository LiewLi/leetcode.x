/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
  let res = 0;
  for (let i = 0; i < n.length; ++i) {
    const num = n.charCodeAt(i) - "0".charCodeAt(0);
    res = Math.max(res, num);
  }
  return res;
};

module.exports = minPartitions;
