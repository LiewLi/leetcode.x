/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
  const set = new Set();
  let cnt = 0;
  const _ = n => {
    for (let i = 0; i <= n; ++i) {
      if (!set.has(i)) return false;
    }
    return true;
  };
  for (let i = 0; i < arr.length; ++i) {
    set.add(arr[i]);
    if (_(i)) cnt++;
  }
  return cnt;
};

console.log(maxChunksToSorted([1, 0, 2, 3, 4]));
