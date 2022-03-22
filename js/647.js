// /**
//  * @param {string} s
//  * @return {number}
//  */
// var countSubstrings = function(s) {
//   function isPalindrom(s) {
//     let i = 0;
//     let j = s.length - 1;
//     while (i < j) {
//       if (s[i] === s[j]) {
//         i++;
//         j--;
//       } else return false;
//     }
//     return true;
//   }

//   let cnt = 0;
//   for (let i = 0; i < s.length; ++i) {
//     for (let j = i; j < s.length; ++j) {
//       cnt += isPalindrom(s.substring(i, j + 1)) ? 1 : 0;
//     }
//   }
//   return cnt;
// };

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  let cnt = 0;
  for (let i = 0; i < s.length; ++i) {
    cnt += count(s, i, i);
    cnt += count(s, i, i + 1);
  }

  return cnt;

  function count(s, left, right) {
    let cnt = 0;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
      cnt++;
    }
    return cnt;
  }
};
