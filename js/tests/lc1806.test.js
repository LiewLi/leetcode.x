const reinitializePermutation = require("../lc1806");

test("lc1806", () => {
  expect(reinitializePermutation(2)).toEqual(1);
  expect(reinitializePermutation(4)).toEqual(2);
  expect(reinitializePermutation(6)).toEqual(4);
});
