const minOperations = require("../lc1775");

test("lc1775", () => {
  expect(minOperations([1, 2, 3, 4, 5, 6], [1, 1, 2, 2, 2, 2])).toEqual(3);
  expect(minOperations([1, 1, 1, 1, 1, 1, 1], [6])).toEqual(-1);
  expect(minOperations([6, 6], [1])).toEqual(3);
});
