const numberOfWeakCharacters = require("../lc1996");

test("lc1996", () => {
    expect(numberOfWeakCharacters([[5,5],[6,3],[3,6]])).toEqual(0);
    expect(numberOfWeakCharacters([[2,2],[3,3]])).toEqual(1);
})