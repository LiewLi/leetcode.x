/**
 * @param {number[]} balls
 * @return {number}
 */
var minGroupsForValidAssignment = function(balls) {
  balls.sort((a, b) => a - b);
  let minCnt = balls.length;
  const arr = [1];
  for (let i = 1; i < balls.length; ++i) {
    if (balls[i] == balls[i - 1]) ++arr[arr.length - 1];
    else {
      minCnt = Math.min(minCnt, arr[arr.length - 1]);
      arr.push(1);
    }
    if (i == balls.length - 1) minCnt = Math.min(minCnt, arr[arr.length - 1]);
  }
  for (let k = minCnt + 1; k >= 1; --k) {
    let cnt = 0;
    let i = 0;
    for (; i < arr.length; ++i) {
      const n = arr[i];
      const N = Math.floor(n / k);
      const remain = n % k;
      if (remain <= 0 || N + remain >= k - 1) {
        cnt += N + (remain <= 0 ? 0 : 1);
      } else break;
    }
    if (i >= arr.length) {
      return cnt;
    }
  }
  return balls.length;
};

module.exports = minGroupsForValidAssignment;
