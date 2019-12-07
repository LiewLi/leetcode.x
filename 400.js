/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
  let len = 1;
  let count = 9;
  let start = 1;
  while (n > len * count) {
    n -= len * count;
    start *= 10;
    count *= 10;
    len += 1;
  }

  start += Math.floor((n - 1) / len);
  const s = "" + start;
  return +s[(n - 1) % len];
};

console.log(findNthDigit(11));
