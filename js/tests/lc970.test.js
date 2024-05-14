const powerfulIntegers = require("../lc970");

test("lc970", () => {
    expect(powerfulIntegers(2, 3, 10)).toEqual([2,3,4,5,7,9,10]);
    expect(powerfulIntegers(3, 5, 15)).toEqual([2,4,6,8,10,14]);
    expect(powerfulIntegers(2, 1,10)).toEqual([2,3,5,9]);
})