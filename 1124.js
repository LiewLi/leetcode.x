/**
 * @param {number[]} hours
 * @return {number}
 */
// var longestWPI = function(hours) {
//   let maxLen = 0;
//   let s = 0;
//   let e = 0;
//   let cnt = 0;
//   while (s < hours.length) {
//     if (hours[e] > 8) cnt++;
//     else cnt--;
//     if (cnt > 0) {
//       maxLen = Math.max(maxLen, e - s + 1);
//     }
//     e++;
//     if (e >= hours.length) {
//       e = ++s;
//       cnt = 0;
//     }
//   }

//   return maxLen;
// };

var longestWPI = function(hours) {
  let sum = 0;
  let ret = 0;
  const map = {};
  for (let i = 0; i < hours.length; ++i) {
    sum += hours[i] > 8 ? 1 : -1;
    if (sum > 0) ret = i + 1;
    else if (sum - 1 in map) ret = Math.max(ret, i - map[sum - 1]);
    if (!(sum in map)) map[sum] = i;
  }
  return ret;
};

console.log(longestWPI([9, 9, 6, 0, 6, 6, 9]));
console.log(longestWPI([6, 6, 9]));
