/**
 * @param {number} n
 * @return {number}
 */
// var bulbSwitch = function(n) {
//   if (n <= 1) return n;

//   const arr = new Array(n).fill(0);
//   for (let i = 1; i <= n; ++i) {
//     let k = 1;
//     while (k * i <= n) {
//       arr[k * i]++;
//       k++;
//     }
//   }

//   return arr.filter(a => a % 2).length;
// };

var bulbSwitch = function(n) {
  return Math.floor(Math.sqrt(n));
};
