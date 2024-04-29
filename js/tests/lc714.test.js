const maxProfit = require("../lc714");

test("lc714", () => {
    expect(maxProfit([1,3,2,8,4,9], 2)).toEqual(8);
    expect(maxProfit([1,3,7,5,10,3], 3)).toEqual(6);
    expect(maxProfit([1,4,6,2,8,3,10,14], 3)).toEqual(13);
    expect(maxProfit([2,2,1,1,5,5,3,1,5,4], 2)).toEqual(4);
})