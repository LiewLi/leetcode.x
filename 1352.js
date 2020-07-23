var ProductOfNumbers = function() {
  this.arr = [];
};

/**
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
  if (num) {
    this.arr.push(num * (this.arr.length ? this.arr[this.arr.length - 1] : 1));
  } else {
    this.arr = [];
  }
};

/**
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
  if (k > this.arr.length) return 0;
  else if (k == this.arr.length) return this.arr[this.arr.length - 1];
  return this.arr[this.arr.length - 1] / this.arr[this.arr.length - k - 1];
};

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */
