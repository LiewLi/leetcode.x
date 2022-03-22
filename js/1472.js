/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
  this.history = [homepage];
  this.index = 0;
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
  this.history = this.history.slice(0, this.index + 1);
  this.history.push(url);
  this.index = this.history.length - 1;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
  this.index = Math.max(0, this.index - steps);
  return this.history[this.index];
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
  this.index = Math.min(this.history.length - 1, this.index + steps);
  return this.history[this.index];
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
