// Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
  if (s.length <= 1) return s;
  const stack = [s[0]];
  const map = {};
  for (let i = 1; i < s.length; ++i) {
    map[s[i]] = i;
  }

  for (let i = 1; i < s.length; ++i) {
    if (stack.includes(s[i])) continue;
    let top = stack[stack.length - 1];
    while (top > s[i] && map[top] > i) {
      stack.pop();
      if (stack.length <= 0) break;
      top = stack[stack.length - 1];
    }
    stack.push(s[i]);
  }
  return stack.join("");
};

// Input: s = "cbacdcbc"
// Output: "acdb"
console.log(removeDuplicateLetters("cbacdcbc"));
