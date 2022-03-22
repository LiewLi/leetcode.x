/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
  const stack = [];
  let cnt = 0;
  for (const s of S) {
    if (s === "(") {
      stack.push(s);
    } else {
      if (stack.length > 0) stack.pop();
      else cnt++;
    }
  }
  return cnt + stack.length;
};

console.log(minAddToMakeValid("()))(("));
