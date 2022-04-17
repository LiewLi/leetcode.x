const minimumSwap = require("./lc1247");

test("lc1247", () => {
  expect(minimumSwap("xx", "yy")).toEqual(1);

  expect(minimumSwap("xy", "yx")).toEqual(2);

  expect(minimumSwap("xx", "xy")).toEqual(-1);
});
