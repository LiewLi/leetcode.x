const minSteps = require("../lc650");

test("lc650", () => {
    expect(minSteps(3)).toEqual(3);
    expect(minSteps(7)).toEqual(7);
    expect(minSteps(9)).toEqual(6);
})