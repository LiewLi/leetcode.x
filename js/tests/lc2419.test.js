const longestSubarray = require("../lc2419")

test("lc2419", () => {
    expect(longestSubarray([1,2,3,3,2,2])).toEqual(2);
    expect(longestSubarray([1,2,3,4])).toEqual(1);
    expect(longestSubarray([96317,96317,96317,96317,96317,96317,96317,96317,96317,279979])).toEqual(1);
    expect(longestSubarray([311155,311155,311155,311155,311155,311155,311155,311155,201191,311155])).toEqual(8);
})