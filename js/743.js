/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var networkDelayTime = function(times, N, K) {
  const dist = new Array(N + 1).fill(Number.MAX_SAFE_INTEGER);
  dist[K] = 0;
  const edges = {};
  const nodes = new Set();
  for (let i = 1; i <= N; ++i) {
    nodes.add(i);
    edges[i] = [];
  }

  for (const t of times) {
    edges[t[0]].push([t[1], t[2]]);
  }

  while (nodes.size) {
    const nodesArr = [...nodes].sort((a, b) => dist[a] - dist[b]);
    const u = nodesArr.shift();
    nodes.delete(u);

    for (const e of edges[u]) {
      if (
        dist[e[0]] === Number.MAX_SAFE_INTEGER ||
        dist[e[0]] > dist[u] + e[1]
      ) {
        dist[e[0]] = dist[u] + e[1];
      }
    }
  }

  let maxDistance = -1;
  for (let i = 1; i <= N; ++i) {
    maxDistance = Math.max(maxDistance, dist[i]);
  }

  return maxDistance === Number.MAX_SAFE_INTEGER ? -1 : maxDistance;
};

console.log(networkDelayTime([[1, 2, 1]], 2, 2));
