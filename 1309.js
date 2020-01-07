/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
  let ret = "";

  for (let i = 0; i < s.length; ++i) {
    const ch = s[i];
    if (i + 2 < s.length && s[i + 2] === "#") {
      ret += String.fromCharCode(
        "a".charCodeAt(0) + +s.substring(i, i + 2) - 1
      );
      i += 2;
    } else ret += String.fromCharCode("a".charCodeAt(0) + +ch - 1);
  }

  return ret;
};

console.log(freqAlphabets("10#11#12"));
