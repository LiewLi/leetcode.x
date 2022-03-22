function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  const ret = [];

  function _serialize(root) {
    if (!root) {
      ret.push("null");
      return;
    }
    ret.push("" + root.val);
    _serialize(root.left);
    _serialize(root.right);
  }

  _serialize(root);

  return ret.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  const arr = data.split(",");

  function _deserialize() {
    const t = arr.shift();
    if (t === "null") {
      return null;
    }

    const node = new TreeNode();
    node.val = +t;

    node.left = _deserialize();
    node.right = _deserialize();

    return node;
  }

  return _deserialize();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
