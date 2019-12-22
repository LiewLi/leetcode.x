/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  if (k >= num.length) return "0";
  const ret = [num[0]];
  for (let i = 1; i < num.length; ++i) {
    while (ret.length && ret[ret.length - 1] > num[i] && k) {
      ret.pop();
      k--;
    }
    ret.push(num[i]);
  }
  while (k--) ret.pop();
  while (ret.length > 1 && ret[0] === "0") ret.shift();
  return ret.join("");
};

console.log(removeKdigits("112", 1));
