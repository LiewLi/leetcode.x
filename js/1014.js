/**
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function(A) {
  const arr = [];
  A.forEach((a, idx) => {
    arr[idx] = a + idx;
  });
  for (let i = 1; i < arr.length; ++i) {
    arr[i] = Math.max(arr[i], arr[i - 1]);
  }

  let max = 0;

  for (let i = 1; i < A.length; ++i) {
    max = Math.max(max, A[i] - i + arr[i - 1]);
  }

  return max;
};

console.log(maxScoreSightseeingPair([8, 1, 5, 2, 6]));
