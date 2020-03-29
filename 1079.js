/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
  const set = new Set();
  const visited = new Array(tiles.length).fill(false);
  const _ = (idx, arr) => {
    visited[idx] = true;
    set.add([...arr, tiles[idx]].join(""));
    for (let i = 0; i < tiles.length; ++i) {
      if (!visited[i]) {
        _(i, [...arr, tiles[idx]]);
      }
    }

    visited[idx] = false;
  };

  for (let i = 0; i < tiles.length; ++i) _(i, []);

  return set.size;
};

console.log(numTilePossibilities("AAABBC"));
