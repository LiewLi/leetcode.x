const findLUSlength = require("../lc522");

test("lc522", () => {
    expect(findLUSlength(["aba","cdc","eae"])).toEqual(3);
    expect(findLUSlength(["aaa","aaa","aa"])).toEqual(-1);
    expect(findLUSlength(["aabbcc", "aabbcc","cb"])).toEqual(2);
})