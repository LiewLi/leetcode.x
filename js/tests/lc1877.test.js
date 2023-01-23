const minPairSum = require("../lc1877")

test("lc1877", () => {
    expect(minPairSum([3,5,2,3])).toEqual(7);
    expect(minPairSum([3,5,4,2,4,6])).toEqual(8);
})