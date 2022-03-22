/**
 * Initialize your data structure here.
 */
var TimeMap = function() {
  this.map = {};
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
  this.map[key] = this.map[key] || [];
  this.map[key].push([value, timestamp]);
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
  if (key in this.map) {
    const tmp = this.map[key];
    for (let i = tmp.length - 1; i >= 0; --i) {
      if (tmp[i][1] <= timestamp) {
        return tmp[i][0];
      }
    }
  }
  return "";
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
