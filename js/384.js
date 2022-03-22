/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  const ret = [...this.nums];
  for (let i = 0; i < this.nums.length - 1; ++i) {
    const idx = Math.floor(Math.random() * (this.nums.length - i)) + i;
    [ret[i], ret[idx]] = [ret[idx], ret[i]];
  }
  return ret;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
