const matrixBlockSum = require("./lc1314");

test("lc1314", () => {
  expect(matrixBlockSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 1)).toEqual([
    [12, 21, 16],
    [27, 45, 33],
    [24, 39, 28]
  ]);
});
