const nextBeautifulNumber = require("../lc2048");

test("lc2048", () => {
  expect(nextBeautifulNumber(1)).toEqual(22);
  expect(nextBeautifulNumber(1000)).toEqual(1333);
  expect(nextBeautifulNumber(3000)).toEqual(3133);
});
