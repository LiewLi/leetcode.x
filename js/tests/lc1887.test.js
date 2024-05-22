const reductionOperations = require("../lc1887");

test("lc1887", () => {
    expect(reductionOperations([5,1,3])).toEqual(3);
    expect(reductionOperations([1,1,2,2,3])).toEqual(4);
})