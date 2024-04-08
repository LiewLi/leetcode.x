const computeArea = require("../lc223");

test("lc223", () => {
    expect(computeArea(-3, 0, 3, 4, 0, -1, 9, 2)).toEqual(45);
});