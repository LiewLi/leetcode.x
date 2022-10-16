const minMoves = require("./lc453");

test("lc453", () => {
  expect(minMoves([1, 2, 3])).toEqual(3);
  expect(minMoves([5, 6, 8, 8, 5])).toEqual(7);
});
