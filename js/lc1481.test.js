const findLeastNumOfUniqueInts = require("./lc1481");

test("lc1481", () => {
  expect(findLeastNumOfUniqueInts([5, 5, 4], 1)).toEqual(1);
  expect(findLeastNumOfUniqueInts([4, 3, 1, 1, 3, 3, 2], 3)).toEqual(2);
});
