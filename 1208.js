/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
// var equalSubstring = function(s, t, maxCost) {
//   let maxL = 0;
//   for (let k = 0; k < s.length && s.length - k > maxL; ++k) {
//     let cost = maxCost;
//     let i = k
//     let cnt = 0
//     while (i < s.length && i < t.length && cost >= 0) {
//       cost -= Math.abs(s.charCodeAt(i) - t.charCodeAt(i));
//       if (cost >= 0) cnt++;
//       i++
//     }
//     maxL = Math.max(maxL, cnt);
//   }
//   return maxL;
// };

var equalSubstring = function(s, t, maxCost) {
  let i = 0;
  let maxL = 0;
  let cost = 0;
  for (let j = 0; j < s.length && j < t.length; ++j) {
    const diff = Math.abs(s.charCodeAt(j) - t.charCodeAt(j));
    cost += diff;
    while (cost > maxCost) {
      cost -= Math.abs(s.charCodeAt(i) - t.charCodeAt(i));
      i++;
    }
    maxL = Math.max(maxL, j - i + 1);
  }
  return maxL;
};

console.log(equalSubstring("krrgw", "zjxss", 19));
