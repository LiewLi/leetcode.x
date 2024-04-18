const minimumDeleteSum = require("../lc712");

test("lc712", () => {
    expect(minimumDeleteSum("sea", "eat")).toEqual(231);
    expect(minimumDeleteSum("delete", "leet")).toEqual(403);
})