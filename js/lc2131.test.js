const longestPalindrome = require("./lc2131");

test("lc2131", () => {
  expect(longestPalindrome(["lc", "cl", "gg"])).toEqual(6);
  expect(longestPalindrome(["ab", "ty", "yt", "lc", "cl", "ab"])).toEqual(8);
  expect(longestPalindrome(["cc", "ll", "xx"])).toEqual(2);
  expect(
    longestPalindrome([
      "dd",
      "aa",
      "bb",
      "dd",
      "aa",
      "dd",
      "bb",
      "dd",
      "aa",
      "cc",
      "bb",
      "cc",
      "dd",
      "cc"
    ])
  ).toEqual(22);
});
