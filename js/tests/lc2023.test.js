const numOfPairs = require("../lc2023");

test("lc2023", () => {
    expect(numOfPairs(["777","7","77","77"], "7777")).toEqual(4);
    expect(numOfPairs(["123","4","12","34"], "1234")).toEqual(2);
    expect(numOfPairs(["1","1","1"], "11")).toEqual(6);
})