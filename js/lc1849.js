/**
 * @param {string} s
 * @return {boolean}
 */
var splitString = function(s) {
  const _split_helper = (s, num) => {
    if (s.length <= 0) {
      return true;
    }
    let n = 0;
    for (let i = 0; i < s.length; ++i) {
      n = 10 * n + (s.charCodeAt(i) - "0".charCodeAt(0));
      if (n + 1 == num) {
        if (_split_helper(s.substring(i + 1), n)) {
          return true;
        }
      }
    }
    return false;
  };

  let n = 0;
  for (let i = 0; i < s.length - 1; ++i) {
    n = 10 * n + (s.charCodeAt(i) - "0".charCodeAt(0));
    if (_split_helper(s.substring(i + 1), n)) return true;
  }
  return false;
};

module.exports = splitString;
