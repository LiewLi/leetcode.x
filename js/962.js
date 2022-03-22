/**
 * @param {number[]} A
 * @return {number}
 */
var maxWidthRamp = function(A) {
  const B = [];
  for (let i = 0; i < A.length; ++i) {
    B[i] = i;
  }

  B.sort((i, j) => {
    if (A[i] === A[j]) {
      return i - j;
    } else return A[i] - A[j];
  });

  let ret = 0;
  let minN = A.length;
  for (const i of B) {
    ret = Math.max(ret, i - minN);
    minN = Math.min(minN, i);
  }

  return ret;
};

console.log(
  maxWidthRamp([
    3,
    28,
    15,
    1,
    4,
    12,
    6,
    19,
    8,
    15,
    3,
    9,
    6,
    4,
    13,
    12,
    6,
    12,
    10,
    1,
    2,
    1,
    4,
    1,
    4,
    0,
    0,
    1,
    1,
    0
  ])
);
