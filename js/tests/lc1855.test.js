const maxDistance = require("../lc1855");

test("lc1855", () => {
    expect(maxDistance([55,30,5,4,2], [100,20,10,10,5])).toEqual(2);
    expect(maxDistance([2, 2, 2], [10, 10, 1])).toEqual(1);
}) 