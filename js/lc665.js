/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
  const stack = [];
  let cnt = 0;
  for (const n of nums) {
    if (stack.length <= 0 || stack[stack.length - 1] <= n) {
      stack.push(n);
      continue;
    }
    if (++cnt > 1) return false;
    let flag = true;
    for (let i = stack.length - 2; i >= 0; --i) {
      if (stack[i] > n) {
        flag = false;
        break;
      }
    }
    if (flag) {
      stack.pop();
      stack.push(n);
    }
  }
  return true;
};
