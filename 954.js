/**
 * @param {number[]} A
 * @return {boolean}
 */
var canReorderDoubled = function(A) {
  if (A.length % 2 !== 0) return false;
  A.sort((a, b) => a - b);
  while (A.length > 0) {
    const a = A.pop();
    const target = a >= 0 ? a / 2 : a * 2;
    let high = A.length - 1;
    let low = 0;
    let flag = false;
    while (low <= high) {
      const mid = low + Math.floor((high - low) / 2);
      if (A[mid] === target) {
        A.splice(mid, 1);
        flag = true;
        break;
      } else if (A[mid] > target) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    if (!flag) return false;
  }
  return true;
};

console.log(canReorderDoubled([4, -2, 2, -4]));
