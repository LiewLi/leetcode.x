const findPrefixScore = require("../lc2640");

test("lc2640", () => {
    expect(findPrefixScore([2,3,7,5,10])).toEqual([4,10,24,36,56]);
})