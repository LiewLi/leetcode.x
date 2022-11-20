const longestSubsequence = require("../lc1218");

test("lc1218", () => {
  expect(longestSubsequence([1, 2, 3, 4], 1)).toEqual(4);
  expect(longestSubsequence([1, 3, 5, 7])).toEqual(1);
  expect(longestSubsequence([1, 5, 7, 8, 5, 3, 4, 2, 1], -2)).toEqual(4);
});
