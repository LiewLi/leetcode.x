const findClosestElements = require("./lc658");

test("lc658", () => {
  expect(findClosestElements([1, 2, 3, 4, 5], 4, 3)).toEqual([1, 2, 3, 4]);
});
