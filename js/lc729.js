function TreeNode(start, end) {
  this.start = start;
  this.end = end;
  this.left = null;
  this.right = null;
}

const _insert = (node, s, e) => {
  if (node.start >= e) {
    if (!node.left) {
      node.left = new TreeNode(s, e);
      return true;
    } else return _insert(node.left, s, e);
  } else if (node.end <= s) {
    if (!node.right) {
      node.right = new TreeNode(s, e);
      return true;
    }
    return _insert(node.right, s, e);
  } else return false;
};

var MyCalendar = function() {};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
  if (!this.root) {
    this.root = new TreeNode(start, end);
    return true;
  } else {
    return _insert(this.root, start, end);
  }
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
