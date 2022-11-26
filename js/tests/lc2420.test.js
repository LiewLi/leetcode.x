const goodIndices = require("../lc2420");

test("lc2420", () => {
    expect(goodIndices([2,1,1,1,3,4,1], 2)).toEqual([2, 3]);
    expect(goodIndices([878724,201541,179099,98437,35765,327555,475851,598885,849470,943442], 4)).toEqual([4, 5]);
})