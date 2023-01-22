const countNicePairs = require("../lc1814");

test("lc1814", () => {
    expect(countNicePairs([42,11,1,97])).toEqual(2);
    expect(countNicePairs([13,10,35,24,76])).toEqual(4);
})