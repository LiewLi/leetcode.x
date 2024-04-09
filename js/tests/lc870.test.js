const advantageCount = require("../lc870");

test('lc870', () => {
    expect(advantageCount([2,7,11,15], [1,10,4,11])).toEqual([2,11,7,15]);
    expect(advantageCount([12,24,8,32], [13,25,32,11])).toEqual([24,32,8,12]);
});