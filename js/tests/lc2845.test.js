const countInterestingSubarrays = require("../lc2845");

test("lc2845", () => {
    expect(countInterestingSubarrays([3,2,4], 2, 1)).toEqual(3);
    expect(countInterestingSubarrays([3,1,9,6], 3, 0)).toEqual(2);
    expect(countInterestingSubarrays([11,12,21,31], 10, 1)).toEqual(5);
    expect(countInterestingSubarrays([3,5,4,2], 5, 0)).toEqual(4);
})