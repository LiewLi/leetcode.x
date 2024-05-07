const repeatLimitedString = require("../lc2182");

test("lc2182", () => {
    expect(repeatLimitedString("cczazcc", 3)).toEqual("zzcccac");
    expect(repeatLimitedString("aababab", 2)).toEqual("bbabaa");
})