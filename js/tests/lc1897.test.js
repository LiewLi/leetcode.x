const makeEqual = require("../lc1897");

test("lc1897", () => {
    expect(makeEqual(["abc","aabc","bc"])).toEqual(true);
    expect(makeEqual(["ab","a"])).toEqual(false);
})