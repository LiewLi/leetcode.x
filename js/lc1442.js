/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function(arr) {
  let cnt = 0;

  for (let i = 0; i < arr.length; ++i) {
    let xor = 0;
    for (let j = i; j < arr.length; ++j) {
      xor ^= arr[j];
      if (xor == 0) {
        cnt += j - i;
      }
    }
  }

  return cnt;
};

console.log(countTriplets([2, 3, 1, 6, 7]));
