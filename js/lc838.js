/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
  const arrLeft = Array(dominoes.length).fill(null);
  const arrRight = Array(dominoes.length).fill(null);
  let idx = null;
  for (let i = dominoes.length - 1; i >= 0; --i) {
    if (dominoes.charAt(i) == "L") {
      idx = i;
    } else if (dominoes.charAt(i) == "R") {
      idx = null;
    } else {
      if (idx !== null) {
        arrLeft[i] = idx;
      }
    }
  }

  idx = null;
  for (let i = 0; i < dominoes.length; ++i) {
    if (dominoes.charAt(i) == "L") {
      idx = null;
    } else if (dominoes.charAt(i) == "R") {
      idx = i;
    } else {
      if (idx !== null) {
        arrRight[i] = idx;
      }
    }
  }

  const res = [];
  for (let i = 0; i < dominoes.length; ++i) {
    if (
      dominoes.charAt(i) == "." &&
      (arrLeft[i] !== null || arrRight[i] !== null)
    ) {
      if (arrLeft[i] === null) {
        res.push("R");
      } else if (arrRight[i] === null) {
        res.push("L");
      } else {
        const leftDistance = Math.abs(arrLeft[i] - i);
        const rightDistance = Math.abs(arrRight[i] - i);
        res.push(
          leftDistance == rightDistance
            ? "."
            : leftDistance < rightDistance
            ? "L"
            : "R"
        );
      }
    } else {
      res.push(dominoes.charAt(i));
    }
  }
  return res.join("");
};

module.exports = pushDominoes;
