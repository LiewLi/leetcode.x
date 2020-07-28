/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
  const arr = [];
  const par = [];
  let i = 0;

  const _ = (a, i, j) => {
    while (i < j) {
      [a[i], a[j]] = [a[j], a[i]];
      ++i;
      --j;
    }
  };

  while (i < s.length) {
    if (s[i] == "(") {
      par.push(arr.length);
    } else if (s[i] == ")") {
      _(arr, par.pop(), arr.length - 1);
    } else {
      arr.push(s[i]);
    }
    ++i;
  }
  return arr.join("");
};

console.log(reverseParentheses("(ed(et(oc))el)"));
