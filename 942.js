/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
  const n = S.length;
  let low = 0;
  let high = n;
  const ret = [];
  for (let i = 0; i < S.length; ++i) {
    if (S[i] === "I") {
      ret.push(low++);
    } else {
      ret.push(high--);
    }
  }
  ret.push(low);
  return ret;
};

console.log(diStringMatch("IDID"));
