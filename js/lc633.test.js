const judgeSquareSum = require("./lc633");

test("lc633", () => {
  expect(judgeSquareSum(5)).toEqual(true);
  expect(judgeSquareSum(3)).toEqual(false);
});
