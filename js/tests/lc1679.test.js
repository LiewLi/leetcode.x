const maxOperations = require("../lc1679");

test("lc1679", () => {
  expect(maxOperations([1, 2, 3, 4], 5)).toEqual(2);
  expect(maxOperations([3, 1, 3, 4, 3], 6)).toEqual(1);
});
