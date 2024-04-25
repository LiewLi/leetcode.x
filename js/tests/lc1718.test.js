const constructDistancedSequence = require("../lc1718");

test("lc1718", () => {
    expect(constructDistancedSequence(3)).toEqual([3,1,2,3,2]);
    expect(constructDistancedSequence(5)).toEqual([5,3,1,4,3,5,2,4,2]);
})