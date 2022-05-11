/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
  const disjointSet = new Array(isConnected.length);
  for (let i = 0; i < isConnected.length; ++i) {
    disjointSet[i] = i;
  }

  const find = n => {
    return (disjointSet[n] = n == disjointSet[n] ? n : find(disjointSet[n]));
  };

  const union = (n, m) => {
    disjointSet[find(m)] = find(n);
  };

  for (let i = 0; i < isConnected.length; ++i) {
    for (let j = 0; j < i; ++j) {
      if (isConnected[i][j]) {
        union(i, j);
      }
    }
  }

  const set = new Set();
  for (let i = 0; i < isConnected.length; ++i) {
    set.add(find(i));
  }
  return set.size;
};

module.exports = findCircleNum;
