const maximumSum = require("./lc1186");

test("lc1186", () => {
  expect(maximumSum([1, -2, 0, 3])).toEqual(4);

  expect(maximumSum([1, -2, -2, 3])).toEqual(3);
});
