const checkIfCanBreak = require("../lc1433");

test("lc1433", () => {
    expect(checkIfCanBreak("abc", "xya")).toEqual(true);
    expect(checkIfCanBreak("abe", "acd")).toEqual(false);
    expect(checkIfCanBreak("leetcodee", "interview")).toEqual(true);
})