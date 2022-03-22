/**
 * @param {string} S
 * @param {number} N
 * @return {boolean}
 */
var queryString = function(S, N) {
  while (N) {
    let K = N;
    let b = "";
    while (K) {
      b = (K % 2 ? "1" : "0") + b;
      K = Math.floor(K / 2);
    }
    if (!S.includes(b)) return false;
    N--;
  }

  return true;
};

console.log(queryString("0110", 4));
