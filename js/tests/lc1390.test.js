const sumFourDivisors = require("../lc1390");

test("lc1390", () => {
    expect(sumFourDivisors([21,4,7])).toEqual(32);
    expect(sumFourDivisors([21,21])).toEqual(64);
    expect(sumFourDivisors([1,2,3,4,5])).toEqual(0);
})