const countLatticePoints = require("../lc2249");

test("lc2249", () => {
    expect(countLatticePoints([[2,2,1]])).toEqual(5);
    expect(countLatticePoints([[2,2,2],[3,4,1]])).toEqual(16);
    expect(countLatticePoints([[8,9,6],[9,8,4],[4,1,1],[8,5,1],[7,1,1],[6,7,5],[7,1,1],[7,1,1],[5,5,3]])).toEqual(141);
})