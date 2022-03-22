/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(N, dislikes) {
  if (N <= 1) return true;
  const edges = [];
  for (const [a, b] of dislikes) {
    (edges[a] = edges[a] || []).push(b);
    (edges[b] = edges[b] || []).push(a);
  }

  const colors = new Array(N + 1).fill(0);
  for (let i = 1; i <= N; ++i) {
    if (colors[i]) {
      continue;
    }
    const que = [i];
    colors[i] = 1;
    while (que.length) {
      const size = que.length;
      for (let i = 0; i < size; ++i) {
        const n = que.shift();
        for (const e of edges[n] || []) {
          if (colors[e] == 0) {
            colors[e] = -colors[n];
            que.push(e);
          } else if (colors[e] == colors[n]) return false;
        }
      }
    }
  }
  return true;
};
