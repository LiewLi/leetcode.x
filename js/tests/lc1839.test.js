const longestBeautifulSubstring = require("../lc1839");

test("lc1839", () => {
    expect(longestBeautifulSubstring("aeiaaioaaaaeiiiiouuuooaauuaeiu")).toEqual(13);
    expect(longestBeautifulSubstring("aeeeiiiioooauuuaeiou")).toEqual(5);
    expect(longestBeautifulSubstring("eieuuoeeueauueeoiiueaeuioeiiieioaouoeeoiiauiueiiuieueeeoaeaeoooiuauiaaueieoeeeeioauaouueiioeiaaaaooeaaaeoouoaoioauoaeuiioaiuuiaaaiieiuiuoiaeuuiooeiiuoaauoioeaeieaeeeiouieuaaaaaeoaeiaeeeaoaeooueieaaaeieooouueaueeiaiuoioiioieuoeeoeaaeeaauoaiaoaauaauioaueiaiooeoiiaiauaooiiauaiaoaoeaioeiaeeuueioauoueuaaiiouoeoeoiaeeooaauieoeaiueioiaieouiaeauaeiaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooouuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuiuaeouiioieouieeiuaeeuoiooioiiaoueioeuaeeoaauoaaeeaaoiuueoeaeoaaeueoueeiiiuiouieaiuoieeoooueiiiaeeuaaieeaaoiuuoeuoauouiieuaeeiueaeeeaaoieaeuiuoeuoaaiueieiouiiiaoueuuiuooeioaeooaeueouiaeuaaiueuoeeiouioiiueiueaaiuoaieuiaoeuoeaeaiuaaoeeuouiiioeeoueuuauoieiaoaeeaeioouoaiieueoauaoeeoeouaiaoaueioiuaooouiueuieuauieeoeaiouoaoeeeueuoeuieooaaaaaiuoououiuuueoioieueuueaueaeuaieueeaieioieuuuueoooueueoiaoiuuiooiauaaiiiiuoaaueeaiiaeaauaooooeaaeuiaaouooauaaaaiieiaeeeeeiauiiuaueieuieaoeeiauiuaueouaeoaaoiuaoiaiouaiaeoiaooieeioiieieioeeioeuioeiooouiiioaiaeeaaieouoaooaiaiueeuieoiuaeuieeiuaoaueiouoieauieiuoooieuiaooeaeaoiueaeeuieaioiuoaeieuaaeouuoiieioeoiaeuiiiuiuaaaoeaaaoiuauaiiuaaaaiieeueeoieuiueuaueiiaioaoaoueiieueoauuueeeeuuueoiuuaiaaeuauuiaeuuaeiaiiioiooeaeiaeoeaeouuaouueeiieaoaeoaueuaoouoioeiaiuiouaueuaiaoeouoeoooioiuioaeeoeaaoioeiioiuoaiiuioiiioeuiiaaaieaoaaeoaeieuiiiuieiieaaioaueoiiiuueeiouuueoiiaeuuaeaaiauaeeieoaioiiuueuaoieieiuiaioeaeuiiaioaieeeaoaieoooiuiaeuuuieeaeeeeuoeueioeiiaaieaiaiiieiouueaouoooueeoiauooeieeoeuoueioauieoeuooiiaiueeouiiuuiaiuuouoaaiuiiiouuuaiiiuiiuouiioaoauiaoeiioaooeuoaauaiiieiuueuueioeaioaaieuuoioeaeeeuauouuiaauuiauuuaiiiooaiaeaeeuioaueeaoiaioiieooueaieoeieoiaouuuuioaieauioeuoauauaaeaoueeiaaoooauoioueaieeaaiuuiieieaaaeoiueeoeoeoaaoioaueeoeoiooeiioiaoeieieaeiaaaoeeuoiueaueoeoaueeiioauuuoaiaeaooaiaaauuieaioeaaoeioouaiauiaaoieiiieeioeeuaiauuaeeooiuuuaeeieaeieoaaiioaoooeaaeaooouaaoeaoiiuaiauooaiuoeauoeiaeaaeueeiaiooaeaoioeuuauaioaiiioioeuuueiuaeoeaiiuaioiueooioeiueaaeueeiauoiaoeooiuaeuoaououiiiauuaaeeuaiuueaaoioueouaooaaiieeeiueieeouoieiuoueeueauauoueaooaoiuouuiauaeoiouaoeaauaaaoaaueoaeaoeuaiiiaueeiiaaoeuaouiaaiauoeeueueiaooeiooaeuooiieioaaeiueuieuoueiaeiiiaaueaaaoauiauaooaeoeouaaoeeoieuioeuooeaeeoioeeoouieiouuooeaioooouoaoeeouueioaeuoeoiioeouoeuiuuaaouaiuaioaiiuiiuuieaoiiieaaeeioeeiuuouioiuoaiuuuouoeauuoauoeiuuoiiuauoaeuieaiaaoaoiieoeeiaoaueuuoiaauioueeiueeaouioiiauoeuaooiueaaeuuiiiooioeiuioaeuuaouieeiuooaeeaeiiiaiieoaeeoaoioieiuiaeiaiiiouoeoeaeuiuaoeuiiouoaeioiouioiaouiaoooioooieiieaeeaiaaiuoaaaaeoauioiouaaaoeiiueaooeieieueaoiuiaiueaaauiuiuooeaaaaeoiooeueiaaueeaeaoouoioouoeouaoaooauieeuuoeooaauuoaueoaaauiiueoaauiiaaiaoaiuoeeooiiauaueeuoiuooaiueeeauaoeeaiieeoeaaaoueaeiouaouioauoouaeoiauaauouuuaoeuaaeueeeouoaouueaooiueeauuiiioeaeeieoaoeaooauaiiiueoaiauoueeiooueeiooiaouauiaoooioaaaaoeiaieoeaeaeeoaoaeeaeeuuuuioouaioeouuiuouuoeoaeeaaaeeaoooiaeieiuiuauouuieuiauooioiuoeeoieooeeouoiaaoueoaaiaiuauaauouiauiuoiioiiiauiuooiaooeeiuoeaoaeouuauueiueiuoioeiiaiioueeuiiiueoaieuueaoaiioeeuuauuuiuaueooeaaeeioieuieuuieaeoeoaaoeaoaoueiiaueuouiuuaauiiiuuoaaouaeioioooieoaioeouiiuoeaiaiiueoauaaiaeaaeouaeoiouieuaiaeuieuuioueiueueuaooiiouaioeuooeuaaoooieuauuaueiieoeiouaoaeuiaoaooeoeiaoieeaiiuaeaeauoaieeoeoeoauiauiaooouioaoiueuiueaueaaaoaouoeauueaieeuaiueiuauiueaoieoaioouiaaeuiiiueuaiuaiaeiaouooeioaoeaoiaieaeiuouaieeieoaiaaoioaeau")).toEqual(2169);
})