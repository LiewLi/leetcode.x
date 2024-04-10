const minEatingSpeed = require("../lc875");

test("lc875", () => {
    expect(minEatingSpeed([3,6,7,11], 8)).toEqual(4);
    expect(minEatingSpeed([312884470], 312884469)).toEqual(2);
})