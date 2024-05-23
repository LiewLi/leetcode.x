const maxNonDecreasingLength = require("../lc2771")

test("lc2771", () => {
    expect(maxNonDecreasingLength([2,3,1], [1,2,1])).toEqual(2);
    expect(maxNonDecreasingLength([1,3,2,1], [2,2,3,4])).toEqual(4);
})