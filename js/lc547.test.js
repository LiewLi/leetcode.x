const findCircleNum = require("./lc547");

test("lc547", () => {
  expect(findCircleNum([[1, 1, 0], [1, 1, 0], [0, 0, 1]])).toEqual(2);
  expect(findCircleNum([[1, 0, 0], [0, 1, 0], [0, 0, 1]])).toEqual(3);
  expect(
    findCircleNum([[1, 0, 0, 1], [0, 1, 1, 0], [0, 1, 1, 1], [1, 0, 1, 1]])
  ).toEqual(1);
  expect(findCircleNum([[1, 1, 1], [1, 1, 1], [1, 1, 1]])).toEqual(1);
});
