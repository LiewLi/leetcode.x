/**
 * @param {number} n
 * @return {number}
 */
// var countDigitOne = function(n) {
//   const map = {};
//   function util(n) {
//     if (n <= 0) return [0, 0];
//     if (n < 10) {
//       return (map[n] = [1, 1]);
//     }
//     if (n in map) {
//       return map[n];
//     }

//     let cntNum = 0;
//     let cntOne = 0;
//     const str = "" + n;
//     const d = +str[0];
//     for (let k = d; k >= 0; --k) {
//       let r = Math.pow(10, str.length - 1) - 1;
//       if (k == d) {
//         r = +str.substring(1);
//       }
//       const sub = util(r);
//       if (k == 1) {
//         cntOne += r + 1 + sub[1];
//         cntNum += r + 1;
//       } else {
//         cntOne += sub[1];
//         cntNum += sub[0];
//       }
//     }
//     return (map[n] = [cntNum, cntOne]);
//   }

//   return util(n)[1];
// };

var countDigitOne = function(n) {
  let cnt = 0;
  const div = Math.floor;
  for (let m = 1; m <= n; m *= 10) {
    const d = div(n / m);
    cnt += div((d + 8) / 10) * m + (d % 10 == 1 ? (n % m) + 1 : 0);
  }
  return cnt;
};

console.log(countDigitOne(13));
