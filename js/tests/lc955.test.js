const minDeletionSize = require("../lc955");

test("lc955", () => {
    expect(minDeletionSize(["ca","bb","ac"])).toEqual(1);
    expect(minDeletionSize(["xc","yb","za"])).toEqual(0);
    expect(minDeletionSize(["xga","xfb","yfa"])).toEqual(1);
    expect(minDeletionSize(["cktm","zqkz"])).toEqual(0);
})