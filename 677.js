function TrieNode(val) {
  this.children = {};
  this.val = val;
}

/**
 * Initialize your data structure here.
 */
var MapSum = function() {
  this.root = new TrieNode();
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
  let node = this.root;
  for (let idx = 0; idx < key.length; ++idx) {
    const ch = key[idx];
    if (!node.children[ch]) {
      node.children[ch] = new TrieNode();
    }
    node = node.children[ch];
    if (idx === key.length - 1) {
      node.val = val;
    }
  }
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
  let node = this.root;
  let ret = 0;
  for (const ch of prefix) {
    if (!node.children[ch]) return 0;
    else node = node.children[ch];
  }
  const dfs = node => {
    if (node.val) ret += node.val;
    Object.values(node.children).forEach(n => dfs(n));
  };

  dfs(node);

  return ret;
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
