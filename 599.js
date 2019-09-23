/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  const map = {};
  list1.forEach((e, idx) => {
    map[e] = idx;
  });

  let min = Infinity;
  let ret = [];
  list2.forEach((e, idx) => {
    if (e in map) {
      const sum = map[e] + idx;
      if (sum < min) {
        min = sum;
        ret = [e];
      } else if (sum == min) {
        ret.push(e);
      }
    }
  });

  return ret;
};
