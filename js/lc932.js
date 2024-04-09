/**
 * @param {number} n
 * @return {number[]}
 */
var beautifulArray = function(n) {
  let res = [1];
  while (res.length < n) {
    const tmp = [];
    for (const a of res) {
      if (a * 2 - 1 <= n) {
        tmp.push(a * 2 - 1);
      }
    }

    for (const a of res) {
      if (a * 2 <= n) {
        tmp.push(a * 2);
      }
    }
    res = tmp;
  }
  return res;
};

module.exports = beautifulArray;
