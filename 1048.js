function Node(val) {
  this.val = val;
  this.children = [];
}

function addEdge(n1, n2) {
  function d(n, m) {
    if (n.val.length - m.val.length !== 1) return;
    let i = 0;
    let j = 0;
    while (i < n.val.length && j < m.val.length) {
      if (n.val[i] === m.val[j]) {
        i++;
        j++;
        continue;
      }
      ++i;
      if (i - j > 1) return;
    }
    m.children.push(n);
  }
  d(n1, n2);
  d(n2, n1);
}

/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
  const nodes = words.map(w => new Node(w));
  for (let i = 0; i < nodes.length; ++i) {
    for (let j = i + 1; j < nodes.length; ++j) {
      addEdge(nodes[i], nodes[j]);
    }
  }

  let maxN = 0;
  function dfs(node, level, set) {
    set.add(node);
    maxN = Math.max(maxN, level);
    for (const ch of node.children) {
      if (!set.has(ch)) dfs(ch, level + 1, set);
    }
  }

  for (const n of nodes) {
    const set = new Set();
    dfs(n, 1, set);
  }

  return maxN;
};

console.log(
  longestStrChain([
    "sgtnz",
    "sgtz",
    "sgz",
    "ikrcyoglz",
    "ajelpkpx",
    "ajelpkpxm",
    "srqgtnz",
    "srqgotnz",
    "srgtnz",
    "ijkrcyoglz"
  ])
);
