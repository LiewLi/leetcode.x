const combinationSum3 = require("../lc216");

test("lc216", () => {
  expect(combinationSum3(3, 7)).toEqual([[1, 2, 4]]);
  expect(combinationSum3(3, 9)).toEqual([[1, 2, 6], [1, 3, 5], [2, 3, 4]]);
});
