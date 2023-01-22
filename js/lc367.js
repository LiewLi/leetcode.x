/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let s = 1;
  let e = num;
  while (s <= e) {
    const mid = s + ((e - s) >> 1);
    const prod = mid * mid;
    if (prod == num) return true;
    else if (prod < num) {
      s = mid + 1;
    } else {
      e = mid - 1;
    }
  }

  return false;
};

module.exports = isPerfectSquare;
