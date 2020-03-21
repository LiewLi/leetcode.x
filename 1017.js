/**
 * @param {number} N
 * @return {string}
 */
var baseNeg2 = function(N) {
  const base = -2;
  if (N == 0) return "0";
  let ret = "";
  while (N) {
    let remain = N % base;
    N = (N - remain) / base;
    if (remain < 0) {
      remain += -base;
      N += 1;
    }
    ret = `${remain}` + ret;
  }
  return ret;
};

console.log(baseNeg2(5));
