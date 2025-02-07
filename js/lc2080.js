/**
 * @param {number[]} arr
 */
var RangeFreqQuery = function(arr) {
  this.map = {};
  for (let i = 0; i < arr.length; ++i) {
    this.map[arr[i]] ||= [];
    this.map[arr[i]].push(i);
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @param {number} value
 * @return {number}
 */
RangeFreqQuery.prototype.query = function(left, right, value) {
  if (!(value in this.map)) return 0;
  const arr = this.map[value];
  const _upper = (target, arr) => {
    let s = 0;
    let t = arr.length - 1;
    while (s < t) {
      const m = s + Math.floor((t - s) / 2);
      if (arr[m] < target) {
        s = m + 1;
      } else {
        t = m;
      }
    }
    return arr[s] >= target ? s : -1;
  };

  const _lower = (target, arr) => {
    let s = 0;
    let t = arr.length - 1;
    while (s < t) {
      let m = s + Math.floor((t - s) / 2);
      if (m == s) ++m;
      if (arr[m] > target) {
        t = m - 1;
      } else {
        s = m;
      }
    }
    return arr[s] <= target ? s : -1;
  };
  const leftIdx = _upper(left, arr);
  const rightIdx = _lower(right, arr);
  return leftIdx >= 0 && rightIdx >= 0 ? rightIdx - leftIdx + 1 : 0;
};

/**
 * Your RangeFreqQuery object will be instantiated and called as such:
 * var obj = new RangeFreqQuery(arr)
 * var param_1 = obj.query(left,right,value)
 */

module.exports = RangeFreqQuery;
