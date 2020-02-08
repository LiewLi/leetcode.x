/**
 * @param {number[][]} pairs
 * @return {number}
 */
// var findLongestChain = function(pairs) {
//   const _ = (p1, p2) => p1[1] < p2[0];
//   const edges = [];
//   for (let i = 0; i < pairs.length; ++i) edges[i] = [];
//   for (let i = 0; i < pairs.length; ++i) {
//     for (let j = i + 1; j < pairs.length; ++j) {
//       if (_(pairs[i], pairs[j])) {
//         edges[i].push(j);
//       }
//       if (_(pairs[j], pairs[i])) {
//         edges[j].push(i);
//       }
//     }
//   }

//   let maxLen = 0;
//   const set = new Set();

//   const dfs = (n, level) => {
//     maxLen = Math.max(maxLen, level);
//     for (const e of edges[n]) {
//       if (!set.has(e)) {
//         dfs(e, level + 1);
//       }
//     }
//   };
//   for (let i = 0; i < pairs.length; ++i) {
//     if (!set.has(i)) {
//       dfs(i, 1);
//     }
//   }
//   return maxLen;
// };

var findLongestChain = function(pairs) {
  pairs.sort((a, b) => a[0] - b[0]);
  let maxLen = 0;
  const dp = Array(pairs.length).fill(1);
  for (let i = 1; i < pairs.length; ++i) {
    for (let j = 0; j < i; ++j) {
      if (pairs[i][0] > pairs[j][1]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    maxLen = Math.max(maxLen, dp[i]);
  }
  return maxLen;
};

console.log(findLongestChain([[1, 2], [2, 3], [3, 4]]));
