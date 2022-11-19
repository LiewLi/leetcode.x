/**
 * @param {number[]} parents
 * @return {number}
 */
var countHighestScoreNodes = function(parents) {
  const edges = Array(parents.length);
  for (let i = 0; i < parents.length; ++i) {
    edges[i] = edges[i] || [];
    if (parents[i] >= 0) {
      edges[parents[i]] = edges[parents[i]] || [];
      edges[parents[i]].push(i);
    }
  }

  const nodes = Array(parents.length).fill(0);

  const dfs = node => {
    let cnt = 1;
    for (const e of edges[node]) {
      cnt += dfs(e);
    }
    nodes[node] = cnt;
    return cnt;
  };

  dfs(0);

  let res = 0;
  let maxProd = 0;

  for (let i = 0; i < parents.length; ++i) {
    let prod = 1;
    const child = edges[i] || [];
    let childCnt = 0;
    for (const c of child) {
      if (nodes[c] > 0) {
        prod *= nodes[c];
      }
      childCnt += nodes[c];
    }

    if (parents[i] != -1) {
      prod *= parents.length - childCnt - 1;
    }

    if (prod > maxProd) {
      maxProd = prod;
      res = 1;
    } else if (prod == maxProd) {
      res += 1;
    }
  }

  return res;
};

module.exports = countHighestScoreNodes;
