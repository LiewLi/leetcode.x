const minSubarray = require("../lc1590");

test("lc1590", () => {
    expect(minSubarray([3,1,4,2], 6)).toEqual(1);
    expect(minSubarray([6,3,5,2], 9)).toEqual(2);
    expect(minSubarray([1,2,3], 6)).toEqual(0);
    expect(minSubarray([1,2,3], 7)).toEqual(-1);
})