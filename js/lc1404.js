/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
  let step = 0;
  const arr = s.split("").map(c => +c);
  while (arr.length > 1 || (arr.length == 1 && arr[0] !== 1)) {
    if (arr[arr.length - 1]) {
      let i = arr.length - 1;
      step++;
      while (i >= 0 && arr[i]) {
        arr.length--;
        step++;
        i--;
      }
      if (i >= 0) {
        arr[i] = 1;
      }
    } else {
      step++;
      if (arr.length > 0) arr.length--;
    }
  }
  return step;
};

console.log(numSteps("1101"));
