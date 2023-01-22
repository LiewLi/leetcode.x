const minOperations = require("../lc1827");

test("lc1827", () => {
    expect(minOperations([1, 1, 1])).toEqual(3);
    expect(minOperations([1,5,2,4,1])).toEqual(14);
})