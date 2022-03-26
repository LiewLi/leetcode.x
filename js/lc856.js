/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
  const stack = [];
  let ans = 0;
  for (let i = 0; i < s.length; ++i) {
    if (s.charCodeAt(i) == "(".charCodeAt(0)) {
      stack.push(0);
    } else {
      let v = stack.pop();
      if (v == 0) {
        v = 1;
      }
      if (stack.length >= 1) {
        stack[stack.length - 1] += 2 * v;
      } else {
        ans += v;
      }
    }
  }

  return ans;
};

module.exports = scoreOfParentheses;
