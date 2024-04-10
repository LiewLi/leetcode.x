const shiftingLetters = require("../lc848");

test("lc848", () => {
    expect(shiftingLetters("abc", [3, 5, 9])).toEqual("rpl");
})