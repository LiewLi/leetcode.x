/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var decodeAtIndex = function(S, K) {
  let cnt = 0;
  let i = 0;
  for (; i < S.length; ++i) {
    const ch = S[i];
    if (/[a-z]/.test(ch)) {
      cnt++;
    } else if (/\d/.test(ch)) {
      cnt *= +ch;
    }
    if (cnt >= K) {
      break;
    }
  }
  for (let j = i; j >= 0; --j) {
    const ch = S[j];
    if (/[a-z]/.test(ch)) {
      if (K === cnt) return S[j];
      cnt--;
    } else if (/\d/.test(ch)) {
      cnt /= +ch;
      K %= cnt;
      if (K === 0) K = cnt;
    }
  }
};

console.log(decodeAtIndex("ha22", 5));
console.log(decodeAtIndex("a23", 6));
console.log(decodeAtIndex("leet2code3", 10));
console.log(decodeAtIndex("a2b3c4d5e6f7g8h9", 9));
