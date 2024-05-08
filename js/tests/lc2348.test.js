const zeroFilledSubarray = require("../lc2348")

test("lc2348", () => {
    expect(zeroFilledSubarray([1,3,0,0,2,0,0,4])).toEqual(6);
    expect(zeroFilledSubarray([0,0,0,2,0,0])).toEqual(9);
})