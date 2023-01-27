const maxMatrixSum = require("../lc1975");

test("lc1975", () => {
    expect(maxMatrixSum([[1,-1],[-1,1]])).toEqual(4);
    expect(maxMatrixSum([[1,2,3],[-1,-2,-3],[1,2,3]])).toEqual(16);
    expect(maxMatrixSum([[-1,0,-1],[-2,1,3],[3,2,2]])).toEqual(15);
    expect(maxMatrixSum([[2,9,3],[5,4,-4],[1,7,1]])).toEqual(34);
})