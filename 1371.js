/**
 * @param {string} s
 * @return {number}
 */
// var findTheLongestSubstring = function(s) {
//   const arr = [];
//   const vowels = ["a", "e", "i", "o", "u"];
//   let ret = 0;
//   for (let i = 0; i <= s.length; ++i) {
//     arr[i] = {};
//     for (const v of vowels) {
//       arr[i][v] =
//         i == 0 ? 0 : v == s[i - 1] ? arr[i - 1][v] + 1 : arr[i - 1][v];
//     }

//     for (let j = 0; j < i; ++j) {
//       if (i - j < ret) break;
//       if (
//         Object.entries(arr[i]).every(
//           ([key, val]) => (val - arr[j][key]) % 2 == 0
//         )
//       ) {
//         ret = Math.max(ret, i - j);
//         break;
//       }
//     }
//   }

//   return ret;
// };

var findTheLongestSubstring = function(s) {
  const map = {};
  const vowels = ["a", "e", "i", "o", "u"];
  let ret = 0;
  let cur = 0;
  map[0] = -1;
  for (let i = 0; i < s.length; ++i) {
    if (vowels.includes(s[i])) {
      cur ^= 1 << (s.charCodeAt(i) - "a".charCodeAt(0));
    }
    if (!(cur in map)) map[cur] = i;
    ret = Math.max(ret, i - map[cur]);
  }

  return ret;
};

console.log(findTheLongestSubstring("leetcodeisgreat"));
