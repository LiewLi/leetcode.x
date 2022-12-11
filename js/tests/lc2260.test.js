const minimumCardPickup = require("../lc2260");

test("lc2260", () => {
    expect(minimumCardPickup([3,4,2,3,4,7])).toEqual(4);
    expect(minimumCardPickup([1,0,5,3])).toEqual(-1);
})