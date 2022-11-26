const partitionString = require("../lc2405");

test("lc2405", () => {
    expect(partitionString("abacaba")).toEqual(4);
    expect(partitionString("ssssss")).toEqual(6);
})