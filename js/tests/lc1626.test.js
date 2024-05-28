const bestTeamScore = require("../lc1626");

test("lc1626", () => {
    expect(bestTeamScore([1,2,3,5], [8,9,10,1])).toEqual(6);
    expect(bestTeamScore([319776,611683,835240,602298,430007,574,142444,858606,734364,896074],[1,1,1,1,1,1,1,1,1,1])).toEqual(5431066);
    expect(bestTeamScore([9,2,8,8,2],[4,1,3,3,5])).toEqual(27);
})