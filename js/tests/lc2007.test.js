const findOriginalArray = require("../lc2007");

test("lc2007", () => {
    expect(findOriginalArray([1,3,4,2,6,8])).toEqual([4, 3, 1]);
    expect(findOriginalArray([6,3,0,1])).toEqual([]);
    expect(findOriginalArray([1,2,3,2,4,6,2,4,6,4,8,12])).toEqual([6,4,3,2,2,1]);
})