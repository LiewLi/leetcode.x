/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
  const ret = [];
  const M = matrix.length;
  const N = matrix[0].length;
  for (let i = 0; i < M; ++i) {
    ret[i] = [];
    for (let j = 0; j < N; ++j) {
      let que = [[i, j, 0]];
      const set = new Set();
      while (que.length) {
        const p = que.shift();
        set.add(p[0] * N + p[1]);
        if (matrix[p[0]][p[1]] === 0) {
          ret[i][j] = p[2];
          que = [];
        } else {
          const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];
          for (const d of dir) {
            const q = [d[0] + p[0], d[1] + p[1], p[2] + 1];
            if (q[0] >= M || q[0] < 0 || q[1] < 0 || q[1] >= N) continue;
            if (!set.has(q[0] * N + q[1])) que.push(q);
          }
        }
      }
    }
  }

  return ret;
};

console.log(
  updateMatrix([[0, 1, 0], [0, 1, 0], [0, 1, 0], [0, 1, 0], [0, 1, 0]])
);
