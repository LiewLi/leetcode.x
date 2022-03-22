/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
  let i = 0;
  let j = 0;
  const N = popped.length;
  const stack = [];
  while (i < N) {
    if (stack.length > 0 && stack[stack.length - 1] === popped[i]) {
      stack.pop();
    } else {
      while (j < N && pushed[j] !== popped[i]) {
        stack.push(pushed[j++]);
      }
      if (j >= N) return false;
      ++j;
    }
    i++;
  }
  return true;
};

console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));
