const waysToSplit = require("../lc1712");

test("lc1712", () => {
    expect(waysToSplit([1, 1, 1])).toEqual(1);
    expect(waysToSplit([1,2,2,2,5,0])).toEqual(3);
    expect(waysToSplit([3,2,1])).toEqual(0);
})