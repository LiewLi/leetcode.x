const checkPowersOfThree = require("../lc1780");

test("lc1780", () => {
  expect(checkPowersOfThree(12)).toBe(true);

  expect(checkPowersOfThree(21)).toBe(false);
});
