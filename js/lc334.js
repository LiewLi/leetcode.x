/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  let small = Number.MAX_SAFE_INTEGER;
  let big = Number.MAX_SAFE_INTEGER;
  for (const n of nums) {
    if (n <= small) {
      small = n;
    } else if (n <= big) {
      big = n;
    } else {
      return true;
    }
  }
  return false;
};

console.log(increasingTriplet([5, 1, 5, 5, 2, 5, 4]));
