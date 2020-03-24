/**
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function(A) {
  const arr1 = [];
  const arr2 = [];
  A.forEach((a, idx) => {
    arr1[idx] = a - idx;
    arr2[idx] = a + idx;
  });
  for (let i = 1; i < arr2.length; ++i) {
    arr2[i] = Math.max(arr2[i], arr2[i - 1]);
  }

  let max = 0;

  for (let i = 1; i < arr1.length; ++i) {
    max = Math.max(max, arr1[i] + arr2[i - 1]);
  }

  return max;
};

console.log(maxScoreSightseeingPair([8, 1, 5, 2, 6]));
