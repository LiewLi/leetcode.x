const countPalindromicSubsequence = require("../lc1930");

test("lc1930", () => {
    expect(countPalindromicSubsequence("aabca")).toEqual(3);
    expect(countPalindromicSubsequence("abc")).toEqual(0);
    expect(countPalindromicSubsequence("bbcbaba")).toEqual(4);
})