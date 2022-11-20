const maxLengthBetweenEqualCharacters = require("../lc1624");

test("abca maxLength equal to 2", () => {
  expect(maxLengthBetweenEqualCharacters("abca")).toBe(2);
});
