/**
 * @param {number} num
 * @return {number[]}
 */
// var countBits = function(num) {
//   const _ = n => {
//     let c = 0;
//     for (let i = 0; i < 32; ++i) {
//       if (n & (1 << i)) c++;
//     }
//     return c;
//   };
//   const ret = [];
//   for (let i = 0; i <= num; ++i) {
//     ret.push(_(i));
//   }

//   return ret;
// };

var countBits = function(num) {
  const ret = new Array(num + 1).fill(0);
  let cur = 1;
  let curPow = 1;

  while (cur <= num) {
    const nextPow = curPow << 1;
    while (cur <= num && cur < nextPow) {
      ret[cur] = ret[cur - curPow] + 1;
      cur++;
    }
    curPow = nextPow;
  }
  return ret;
};
