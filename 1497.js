/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function(arr, k) {
  const map = {};
  for (let i = 0; i < arr.length; ++i) {
    arr[i] = ((arr[i] % k) + k) % k;
    map[arr[i]] = (map[arr[i]] || 0) + 1;
  }

  for (const [r, v] of Object.entries(map)) {
    if (+r) {
      if (map[k - r] != v) return false;
    } else if (v % 2) return false;
  }

  return true;
};

console.log(canArrange([1, 2, 3, 4, 5, 10, 6, 7, 8, 9], 5));
