const minimumLengthEncoding = require("../lc820");

test("lc820", () => {
    expect(minimumLengthEncoding(["time", "me", "bell"])).toEqual(10);
    expect(minimumLengthEncoding(["t"])).toEqual(2);
})