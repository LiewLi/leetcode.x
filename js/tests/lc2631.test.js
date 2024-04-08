const _ = require("../lc2631");

test("lc2631", () => {
    const array = [
        {"id":"1"},
        {"id":"1"},
        {"id":"2"}
      ];
    const fn = function (item) { 
        return item.id; 
    };
    expect(array.groupBy(fn)).toEqual(
        { 
            "1": [{"id": "1"}, {"id": "1"}],   
            "2": [{"id": "2"}] 
        }
    )
})