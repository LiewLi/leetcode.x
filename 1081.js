/**
 * @param {string} text
 * @return {string}
 */
var smallestSubsequence = function(text) {
  const visited = new Array(26).fill(false);
  const count = new Array(26).fill(0);
  for (const ch of text) {
    count[ch.charCodeAt(0) - "a".charCodeAt(0)]++;
  }
  const stack = [];
  for (const ch of text) {
    const idx = ch.charCodeAt(0) - "a".charCodeAt(0);
    count[idx]--;
    if (visited[idx]) continue;
    while (
      stack.length &&
      stack[stack.length - 1] > ch &&
      count[stack[stack.length - 1].charCodeAt(0) - "a".charCodeAt(0)]
    ) {
      const c = stack.pop();
      visited[c.charCodeAt(0) - "a".charCodeAt(0)] = false;
    }

    stack.push(ch);
    visited[idx] = true;
  }

  return stack.join("");
};

console.log(smallestSubsequence("cdadabcc"));
