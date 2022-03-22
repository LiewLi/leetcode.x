/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function(barcodes) {
  const map = {};
  barcodes.forEach(b => {
    map[b] = map[b] || 0;
    map[b]++;
  });

  const arr = [];
  for (const [key, val] of Object.entries(map)) {
    arr.push([+val, +key]);
  }

  const ret = [];
  const _ = arr => {
    arr.sort((a, b) => b[0] - a[0]);
  };

  for (let i = 0; i < barcodes.length; i += 2) {
    _(arr);
    ret.push(arr[0][1]);
    arr[0][0]--;
    if (arr[1] && arr[1][0]) {
      ret.push(arr[1][1]);
      arr[1][0]--;
    }
    if (arr[0][0] <= 0) {
      [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
      arr.length--;
    }
    if (arr[1] && arr[1][0] <= 0) {
      [arr[1], arr[arr.length - 1]] = [arr[arr.length - 1], arr[1]];
      arr.length--;
    }
  }

  return ret;
};

console.log(rearrangeBarcodes([1, 1, 1, 1, 2, 2, 3, 3]));
