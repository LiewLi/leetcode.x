const maxProductPath = require("../lc1594");

test("lc1594", () => {
  expect(maxProductPath([[-1, -2, -3], [-2, -3, -3], [-3, -3, -2]])).toEqual(
    -1
  );
  expect(maxProductPath([[1, -2, 1], [1, -2, 1], [3, -4, 1]])).toEqual(8);
  expect(maxProductPath([[1, 3], [0, -4]])).toEqual(0);
});
