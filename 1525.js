/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function(s) {
  const s0 = new Set();
  const s1 = new Set();

  const arr = [];

  for (let i = 0; i < s.length; ++i) {
    s0.add(s[i]);
    arr[i] = [s0.size, 0];
  }

  for (let i = s.length - 1; i > 0; --i) {
    s1.add(s[i]);
    arr[i - 1][1] = s1.size;
  }

  return arr.filter(a => a[0] == a[1]).length;
};

console.log(numSplits("aacaba"));
