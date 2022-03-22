/**
 * @param {number[]} arr
 * @return {number}
 */
var mctFromLeafValues = function(arr) {
  function minIdx(arr) {
    if (arr.length <= 0) return -1;
    let idx = 0;
    let minN = arr[idx];
    for (let i = 0; i < arr.length; ++i) {
      if (arr[i] < minN) {
        idx = i;
        minN = arr[i];
      }
    }
    return idx;
  }

  let ret = 0;
  while (arr.length > 1) {
    const idx = minIdx(arr);
    if (idx > 0 && idx < arr.length - 1) {
      ret += arr[idx] * Math.min(arr[idx - 1], arr[idx + 1]);
    } else {
      ret += idx > 0 ? arr[idx] * arr[idx - 1] : arr[idx] * arr[1];
    }
    arr.splice(idx, 1);
  }

  return ret;
};

console.log(mctFromLeafValues([6, 2, 4]));
