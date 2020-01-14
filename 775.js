/**
 * @param {number[]} A
 * @return {boolean}
 */
// var isIdealPermutation = function(A) {
//   let local = 0;
//   let gl = 0;
//   for (let i = 1; i < A.length; ++i) {
//     if (A[i] < A[i - 1]) local++;
//   }

//   function mergeSort(A, low, high) {
//     if (low >= high) return;
//     let mid = Math.floor((high - low) / 2) + low;
//     mergeSort(A, low, mid);
//     mergeSort(A, mid + 1, high);
//     let i = low;
//     let j = mid + 1;
//     let tmp = [...A];
//     let idx = low;
//     while (i <= mid || j <= high) {
//       if (i > mid) {
//         A[idx++] = tmp[j++];
//       } else if (j > high) {
//         gl += high - mid;
//         A[idx++] = tmp[i++];
//       } else {
//         if (tmp[i] < tmp[j]) {
//           gl += j - mid - 1;
//           A[idx++] = tmp[i++];
//         } else {
//           A[idx++] = tmp[j++];
//         }
//       }
//     }
//   }

//   mergeSort(A, 0, A.length - 1);
//   return local === gl;
// };

var isIdealPermutation = function(A) {
  let max = 0;
  for (let i = 1; i < A.length; ++i) {
    if (A[i] < max) {
      return false;
    }
    max = Math.max(max, A[i - 1]);
  }
  return true;
};

console.log(isIdealPermutation([0, 2, 1, 3]));
