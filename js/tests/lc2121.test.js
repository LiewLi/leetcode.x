const getDistances = require("../lc2121");

test("lc2121", () => {
    expect(getDistances([2,1,3,1,2,3,3])).toEqual([4,2,7,2,4,4,5]);
    expect(getDistances([10,5,10,10])).toEqual([5,0,3,4]);
})