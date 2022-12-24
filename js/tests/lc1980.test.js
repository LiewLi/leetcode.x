const findDifferentBinaryString = require("../lc1980");

test("lc1980", () => {
    expect(findDifferentBinaryString(["00","01"])).toEqual("10");
    expect(findDifferentBinaryString(["111","011","001"])).toEqual("000");
})