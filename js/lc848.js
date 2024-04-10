/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {
  const res = [];
  const arr = [];
  shifts.reverse().reduce((p, c) => {
    arr.unshift(p + c);
    return p + c;
  }, 0);
  for (let i = 0; i < s.length; ++i) {
    let ch = s.charCodeAt(i) - "a".charCodeAt(0);
    ch += arr[i];
    ch %= 26;
    res.push(String.fromCharCode("a".charCodeAt(0) + ch));
  }
  return res.join("");
};

module.exports = shiftingLetters;
