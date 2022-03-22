/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
  const arr = [];
  for (const n of nums) {
    let i = arr.length - 1;
    for (; i >= 0; --i) {
      if (arr[i][arr[i].length - 1] + 1 === n) {
        arr[i].push(n);
        break;
      }
    }
    if (i < 0) {
      arr.push([n]);
    }
  }
  return arr.every(a => a.length >= 3);
};

console.log(isPossible([1, 2, 3, 3, 4, 4, 5, 5]));
