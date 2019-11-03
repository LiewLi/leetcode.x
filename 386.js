/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
  const arr = [];
  for (let i = 1; i < 10; ++i) {
    dfs(i, arr);
  }

  function dfs(k, arr) {
    if (k > n) return;
    arr.push(k);
    for (let i = 0; i < 10; ++i) {
      dfs(k * 10 + i, arr);
    }
  }

  return arr;
};

console.log(lexicalOrder(13));
