/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
  const group = {};
  this.forEach(a => {
    const key = fn(a);
    group[key] = group[key] || [];
    group[key].push(a);
  });
  return group;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
