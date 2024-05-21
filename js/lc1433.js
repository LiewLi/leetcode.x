/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkIfCanBreak = function(s1, s2) {
  const _check = (s1, s2) => {
    const arr1 = s1.split("").map(a => a.charCodeAt(0) - "a".charCodeAt(0));
    const arr2 = s2.split("").map(a => a.charCodeAt(0) - "a".charCodeAt(0));
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
    for (let i = 0; i < arr1.length; ++i) {
      if (arr1[i] > arr2[i]) {
        return false;
      }
    }
    return true;
  };

  return _check(s1, s2) || _check(s2, s1);
};

module.exports = checkIfCanBreak;
