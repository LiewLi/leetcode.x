const pushDominoes = require("../lc838");

test("lc838", () => {
    expect(pushDominoes("RR.L")).toEqual("RR.L");
    expect(pushDominoes(".L.R...LR..L..")).toEqual("LL.RR.LLRRLL..");
});