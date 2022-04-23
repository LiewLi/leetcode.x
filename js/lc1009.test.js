const bitwiseComplement = require("./lc1009");

test("lc1009", () => {
  expect(bitwiseComplement(5)).toEqual(2);
  expect(bitwiseComplement(7)).toEqual(0);
  expect(bitwiseComplement(10)).toEqual(5);
});
