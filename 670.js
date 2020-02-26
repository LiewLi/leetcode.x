/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
  const arr = [];
  let n = num;
  while (n) {
    arr.unshift(n % 10);
    n = Math.floor(n / 10);
  }
  const copy = [...arr];
  copy.sort((a, b) => b - a);
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] !== copy[i]) {
      for (let j = arr.length - 1; j >= 0; --j) {
        if (arr[j] === copy[i]) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
          break;
        }
      }
      return arr.reduce((p, c) => p * 10 + c, 0);
    }
  }
  return num;
};

console.log(maximumSwap(9973));
