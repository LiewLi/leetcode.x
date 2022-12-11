const numberOfWays = require("../lc2222");

test("lc2222", () => {
    expect(numberOfWays("001101")).toEqual(6);
    expect(numberOfWays("11100")).toEqual(0);
})