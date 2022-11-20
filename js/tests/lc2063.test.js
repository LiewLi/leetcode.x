const countVowels = require("../lc2063");

test("lc2063", () => {
    expect(countVowels("aba")).toEqual(6);
    expect(countVowels("abc")).toEqual(3);
})