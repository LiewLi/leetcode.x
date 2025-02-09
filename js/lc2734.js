/**
 * @param {string} s
 * @return {string}
 */
var smallestString = function(s) {
  let first = -1;
  let last = -1;
  const arr = s.split("");
  const _op = ch => {
    if (ch == "a") return "z";
    return String.fromCharCode(ch.charCodeAt(0) - 1);
  };
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] == "a") {
      if (first >= 0 && last < 0) last = i;
    } else {
      if (first < 0) first = i;
    }
  }
  if (first < 0) {
    arr[arr.length - 1] = _op(arr[arr.length - 1]);
  } else {
    const end = last < 0 ? arr.length : last;
    for (let k = first; k < end; ++k) arr[k] = _op(arr[k]);
  }
  return arr.join("");
};
module.exports = smallestString;
