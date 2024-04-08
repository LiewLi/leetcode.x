const addMinimum = require("../lc2645");

test("lc2645", () => {
    expect(addMinimum("b")).toEqual(2);
    expect(addMinimum("aaa")).toEqual(6);
    expect(addMinimum("abc")).toEqual(0);
    expect(addMinimum("aaaaac")).toEqual(9);
});