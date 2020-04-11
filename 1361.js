/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
var validateBinaryTreeNodes = function(n, leftChild, rightChild) {
  if (n <= 1) return true;
  const arr = [];
  for (let i = 0; i < n; ++i) arr[i] = [0, 0];
  for (let i = 0; i < n; ++i) {
    if (leftChild[i] !== -1) {
      arr[i][1]++;
      arr[leftChild[i]][0]++;
    }
    if (rightChild[i] !== -1) {
      arr[i][1]++;
      arr[rightChild[i]][0]++;
    }
  }

  return (
    arr.every(a => a[1] <= 2 && a[0] <= 1) &&
    arr.filter(a => a[0] === 0 && a[1] >= 1).length == 1
  );
};

console.log(validateBinaryTreeNodes(4, [1, 2, 0, -1], [-1, -1, -1, -1]));
