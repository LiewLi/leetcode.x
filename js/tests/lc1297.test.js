const maxFreq = require("../lc1297");

test("lc1297", () => {
    expect(maxFreq("aababcaab", 2, 3, 4)).toEqual(2);
    expect(maxFreq("aaaa", 1, 3, 3)).toEqual(2);
    expect(maxFreq("abcde", 2, 3, 3)).toEqual(0);
    expect(maxFreq("aabcabcab", 2, 2, 3)).toEqual(3);
    expect(maxFreq("abcabababacabcabc", 3, 3, 10)).toEqual(3);
})