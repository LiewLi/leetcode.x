/**
 * @param {number[]} A
 * @return {boolean}
 */
// var canThreePartsEqualSum = function(A) {
//   if (A.length < 3) return false;
//   const arr = [A[0]];
//   for (let i = 1; i < A.length; ++i) {
//     arr[i] = arr[i - 1] + A[i];
//   }
//   for (let i = 0; i < A.length - 2; ++i) {
//     for (let j = i + 1; j < A.length - 1; ++j) {
//       if (arr[i] === arr[j] - arr[i] && arr[i] === arr[A.length - 1] - arr[j])
//         return true;
//     }
//   }
//   return false;
// };

var canThreePartsEqualSum = function(A) {
  if (A.length < 3) return false;
  const arr = [A[0]];
  for (let i = 1; i < A.length; ++i) {
    arr[i] = arr[i - 1] + A[i];
  }
  if (arr[A.length - 1] % 3 !== 0) return false;
  const part = arr[A.length - 1] / 3;
  let cnt = 0;
  let sum = 0;
  for (const a of A) {
    sum += a;
    if (sum === part) {
      cnt++;
      sum = 0;
    }
  }
  return cnt === 3;
};

console.log(canThreePartsEqualSum([12, -4, 16, -5, 9, -3, 3, 8, 0]));
