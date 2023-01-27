const targetIndices = require("../lc2089");

test("lc2089", () => {
    expect(targetIndices([1,2,5,2,3], 2)).toEqual([1,2]);
    expect(targetIndices([1,2,5,2,3], 3)).toEqual([3]);
})