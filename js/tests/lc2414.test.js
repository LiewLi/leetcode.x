const longestContinuousSubstring = require("../lc2414");

test("lc2414", () => {
    expect(longestContinuousSubstring("abacaba")).toEqual(2);
    expect(longestContinuousSubstring("abcde")).toEqual(5);
})