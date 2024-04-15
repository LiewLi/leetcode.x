const suggestedProducts = require("../lc1268");

test("lc1268", () => {
  expect(
    suggestedProducts(
      ["mobile", "mouse", "moneypot", "monitor", "mousepad"],
      "mouse"
    )
  ).toEqual([
    ["mobile", "moneypot", "monitor"],
    ["mobile", "moneypot", "monitor"],
    ["mouse", "mousepad"],
    ["mouse", "mousepad"],
    ["mouse", "mousepad"],
  ]);
});
