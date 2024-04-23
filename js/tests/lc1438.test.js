const longestSubarray = require("../lc1438");

test("lc1438", () => {
    expect(longestSubarray([8,2,4,7], 4)).toEqual(2);
    expect(longestSubarray([10,1,2,4,7,2], 5)).toEqual(4);
    expect(longestSubarray([4,2,2,2,4,4,2,2], 0)).toEqual(3);
})