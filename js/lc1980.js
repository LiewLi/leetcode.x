/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
  if (nums.length <= 0) return "";
  const MaxN = nums[0].length;

  function PrefixTreeNode(val) {
    this.val = val;
    this.elements = [];
  }

  function PrefixTree() {
    this.root = new PrefixTreeNode();
  }

  PrefixTree.prototype.insert = function(num) {
    let curNode = this.root;
    for (let i = 0; i < num.length; ++i) {
      const idx = num.charCodeAt(i) == "0".charCodeAt(0) ? 0 : 1;
      if (!curNode.elements[idx]) {
        const node = new PrefixTreeNode(idx);
        curNode.elements[idx] = node;
      }
      curNode = curNode.elements[idx];
    }
  };

  const tree = new PrefixTree();
  for (const n of nums) {
    tree.insert(n);
  }

  let res = "";
  const dfs = (node, str, depth) => {
    if (!node) {
      if (depth < MaxN) {
        res = str;
        return true;
      }
      return false;
    }

    for (let i = 0; i < 2; ++i) {
      const childStr = str + `${i}`;
      if (!node.elements[i]) {
        if (depth < MaxN) {
          res = childStr;
          return true;
        }
      } else {
        if (dfs(node.elements[i], childStr, depth + 1)) {
          return true;
        }
      }
    }
    return false;
  };

  for (let i = 0; i < 2; ++i) {
    if (dfs(tree.root.elements[i], `${i}`, 1)) {
      break;
    }
  }

  for (let i = res.length; i < MaxN; ++i) {
    res += "0";
    if (MaxN == 1) {
      if (res == nums[0]) {
        res = "1";
      }
    }
  }
  return res;
};
module.exports = findDifferentBinaryString;
