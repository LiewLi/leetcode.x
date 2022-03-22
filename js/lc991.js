/**
 * @param {number} X
 * @param {number} Y
 * @return {number}
 */
var brokenCalc = function(X, Y) {
  let cnt = 0;
  while (Y > X) {
    cnt++;
    if (Y % 2 == 1) {
      Y++;
    } else {
      Y /= 2;
    }
  }
  return cnt + X - Y;
};
