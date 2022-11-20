const Bitset = require("../lc2166");

test("lc2166", () => {
  const bs = new Bitset(2);
  bs.flip();
  bs.unfix(1);
  expect(bs.toString()).toEqual("10");
});
