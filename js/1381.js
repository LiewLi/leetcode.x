/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
  this.maxSize = maxSize;
  this.arr = [];
  this.top = -1;
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
  if (this.top + 1 <= this.maxSize - 1) {
    this.arr[++this.top] = x;
  }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
  if (this.top < 0) return -1;
  else return this.arr[this.top--];
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
  for (let i = 0; i < Math.min(k, this.top + 1); ++i) {
    this.arr[i] += val;
  }
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
