const largestValsFromLabels = require("../lc1090");

test("lc1090", () => {
    expect(largestValsFromLabels([5,4,3,2,1], [1,1,2,2,3], 3, 1)).toEqual(9);
})