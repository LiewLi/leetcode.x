/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
  const dp = [];
  const base = "a".charCodeAt(0);
  for (let i = 0; i < S.length; ++i) {
    const idx = S.charCodeAt(i) - base;
    if (dp[idx]) {
      dp[idx] = Math.max(dp[idx], i);
    } else {
      dp[idx] = i;
    }
  }
  let i = 0;
  const ret = [];
  while (i < S.length) {
    let m = dp[S.charCodeAt(i) - base];
    let j = i;
    while (j <= m) {
      m = Math.max(m, dp[S.charCodeAt(j) - base]);
      j++;
    }
    ret.push(m - i + 1);
    i = m + 1;
  }
  return ret;
};

console.log(partitionLabels("ababcbacadefegdehijhklij"));
