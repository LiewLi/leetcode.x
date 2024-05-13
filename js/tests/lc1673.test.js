const mostCompetitiv = require("../lc1673");

test("lc1673", () => {
    expect(mostCompetitiv([3,5,2,6], 2)).toEqual([2,6]);
    expect(mostCompetitiv([2,4,3,3,5,4,9,6], 4)).toEqual([2,3,3,4]);
})