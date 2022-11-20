const findMaxLength = require("../lc525");

test("lc525", () => {
  expect(findMaxLength([0, 1, 0])).toEqual(2);
});

test("lc525", () => {
  expect(findMaxLength([0, 1])).toEqual(2);
});
