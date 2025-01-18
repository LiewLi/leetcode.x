/**
 * @param {string} num
 * @param {number} k
 * @return {number}
 */
var getMinSwaps = function(num, k) {
  const numArr = num.split("");
  const arr = [...numArr];
  while (k--) {
    let i = arr.length - 2;
    for (; i >= 0; --i) {
      if (arr[i + 1] > arr[i]) break;
    }
    let low = i + 1;
    let high = arr.length - 1;
    while (low < high) {
      const mid = Math.ceil((high + low) / 2);
      if (arr[mid] > arr[i]) {
        low = mid;
      } else {
        high = mid - 1;
      }
    }
    [arr[low], arr[i]] = [arr[i], arr[low]];
    let s = i + 1;
    let t = arr.length - 1;
    while (s < t) {
      [arr[s], arr[t]] = [arr[t], arr[s]];
      ++s;
      --t;
    }
  }
  const min_swap = (num1, num2) => {
    if (num1.length <= 0) {
      return 0;
    }
    if (num1[0] == num2[0]) {
      return min_swap(num1.slice(1), num2.slice(1));
    } else {
      const ret = Number.MAX_SAFE_INTEGER;
      for (let i = 1; i < num1.length; ++i) {
        if (num2[0] == num1[i]) {
          const arr = [...num1];
          arr.splice(i, 1);
          return i + min_swap(arr, num2.slice(1));
        }
      }
      return ret;
    }
  };
  const ret = min_swap(numArr, arr);
  return ret;
};

module.exports = getMinSwaps;
