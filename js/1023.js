/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
var camelMatch = function(queries, pattern) {
  const isUpperCase = ch => {
    return (
      ch.charCodeAt(0) >= "A".charCodeAt(0) &&
      ch.charCodeAt(0) <= "Z".charCodeAt(0)
    );
  };

  const isLowerCase = ch => {
    return (
      ch.charCodeAt(0) >= "a".charCodeAt(0) &&
      ch.charCodeAt(0) <= "z".charCodeAt(0)
    );
  };

  const _ = word => {
    const arr = [[]];
    for (const ch of word) {
      if (isUpperCase(ch)) {
        arr.push([]);
      }
      arr[arr.length - 1].push(ch);
    }
    return arr;
  };

  const $ = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; ++i) {
      let s = -1;
      for (const ch of arr1[i]) {
        s++;
        while (s < arr2[i].length) {
          if (ch == arr2[i][s]) {
            break;
          } else s++;
        }
        if (s >= arr2[i].length) return false;
      }
    }
    return true;
  };

  const ret = [];
  const pArr = _(pattern);
  for (const q of queries) {
    ret.push($(pArr, _(q)));
  }
  return ret;
};

console.log(
  camelMatch(["CompetitiveProgramming", "CounterPick", "ControlPanel"], "CooP")
);

console.log(
  camelMatch(
    [
      "IXfGawluvnCa",
      "IsXfGaxwulCa",
      "IXfGawlqtCva",
      "IXjfGawlmeCa",
      "IXfGnaynwlCa",
      "IXfGcamwelCa"
    ],
    "IXfGawlCa"
  )
);
