/**
 * @param {string} S
 * @return {number}
 */
var minFlipsMonoIncr = function(S) {
  let flip1 = 0;
  let flip0 = 0;
  for (let i = 0; i < S.length; ++i) {
    if (S[i] === "0") {
      flip1 = Math.min(flip1 + 1, flip0);
    } else {
      flip0 = flip0 + 1;
    }
  }

  return Math.min(flip0, flip1);
};

console.log(minFlipsMonoIncr("010110"));
