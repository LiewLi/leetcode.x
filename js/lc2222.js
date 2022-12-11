/**
 * @param {string} s
 * @return {number}
 */
var numberOfWays = function(s) {
  const arr0 = Array(s.length).fill(0);
  const arr1 = Array(s.length).fill(0);

  let cnt0 = 0;
  let cnt1 = 0;
  let res = 0;
  let sum0 = 0;
  let sum1 = 0;

  const prefixSum0 = Array(s.length).fill(0);
  const prefixSum1 = Array(s.length).fill(0);

  for (let i = s.length - 1; i >= 0; --i) {
    if (s.charCodeAt(i) == "0".charCodeAt(0)) {
      arr1[i] = cnt1;
      cnt0 += 1;
    } else {
      arr0[i] = cnt0;
      cnt1 += 1;
    }
    prefixSum0[i] = sum0;
    prefixSum1[i] = sum1;

    sum0 += arr0[i];
    sum1 += arr1[i];
  }

  for (let i = 0; i < s.length - 2; ++i) {
    if (s.charCodeAt(i) == "0".charCodeAt(0)) {
      res += prefixSum0[i];
    } else {
      res += prefixSum1[i];
    }
  }
  return res;
};

module.exports = numberOfWays;
