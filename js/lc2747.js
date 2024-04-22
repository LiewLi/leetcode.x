/**
 * @param {number} n
 * @param {number[][]} logs
 * @param {number} x
 * @param {number[]} queries
 * @return {number[]}
 */
var countServers = function(n, logs, x, queries) {
  const res = Array(queries.length).fill(0);
  logs.sort((a, b) => a[1] - b[1]);
  const querymap = queries.map((a, idx) => [a, idx]);
  querymap.sort((a, b) => a[0] - b[0]);
  let i = 0;
  let j = 0;
  const serverCnt = Array(n).fill(0);
  const set = new Set();
  for (const query of querymap) {
    const s = Math.max(0, query[0] - x);
    const e = query[0];
    while (j < logs.length && logs[j][1] <= e) {
      const server = logs[j][0];
      serverCnt[server - 1]++;
      set.add(server);
      ++j;
    }

    while (i < logs.length && logs[i][1] < s) {
      const server = logs[i][0];
      serverCnt[server - 1]--;
      if (serverCnt[server - 1] == 0) {
        set.delete(server);
      }
      ++i;
    }

    const cnt = n - set.size;
    res[query[1]] = cnt;
  }
  return res;
};

module.exports = countServers;
