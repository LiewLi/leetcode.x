/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
  let lastCallTime = null;
  let handle;
  return function(...args) {
    const that = this;
    if (!!lastCallTime && lastCallTime + t > Date.now()) {
      clearTimeout(handle);
    }
    lastCallTime = Date.now();
    handle = setTimeout(() => {
      fn.call(that, ...args);
    }, t);
  };
};

module.exports = debounce;

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
