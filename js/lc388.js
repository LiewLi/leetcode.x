/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
  const pathes = input.split("\n");
  const ident = p => {
    let cnt = 0;
    let i = 0;
    for (; i < p.length; ++i) {
      if (p.charAt(i) == "\t") {
        ++cnt;
      } else {
        break;
      }
    }
    return [cnt, p.substring(i)];
  };

  let res = 0;
  const stack = [];
  let sumSoFar = 0;
  for (const p of pathes) {
    const id = ident(p);
    if (stack.length && id[0] <= stack[stack.length - 1][0]) {
      if (stack[stack.length - 1][1].includes(".")) {
        res = Math.max(res, sumSoFar + stack.length - 1);
      }
      while (stack.length && stack[stack.length - 1][0] >= id[0]) {
        sumSoFar -= stack[stack.length - 1][1].length;
        stack.pop();
      }
    }
    stack.push(id);
    sumSoFar += id[1].length;
  }
  if (stack.length && stack[stack.length - 1][1].includes(".")) {
    res = Math.max(res, sumSoFar + stack.length - 1);
  }
  return res;
};

module.exports = lengthLongestPath;
