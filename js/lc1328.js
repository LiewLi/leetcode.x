/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
  if (palindrome.length <= 1) {
    return "";
  }
  const arr = palindrome.split("");
  const idx = arr.slice(0, palindrome.length / 2).findIndex(a => a != "a");
  if (idx != -1) {
    arr[idx] = "a";
  } else {
    arr[palindrome.length - 1] = "b";
  }
  return arr.join("");
};

module.exports = breakPalindrome;
