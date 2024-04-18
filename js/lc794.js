/**
 * @param {string[]} board
 * @return {boolean}
 */
var validTicTacToe = function(board) {
  const mat = board.map(b => {
    const arr = Array(b.length).fill(0);
    for (let i = 0; i < b.length; ++i) {
      if (b.charAt(i) == "X") {
        arr[i] = -1;
      } else if (b.charAt(i) == "O") {
        arr[i] = 1;
      }
    }
    return arr;
  });
  let xN = 0;
  let oN = 0;
  for (let i = 0; i < 3; ++i) {
    for (let j = 0; j < 3; ++j) {
      if (mat[i][j] == -1) {
        xN++;
      } else if (mat[i][j] == 1) {
        oN++;
      }
    }
  }
  const checkNum = () => {
    if (Math.abs(xN - oN) > 1) {
      return false;
    }
    if (xN == oN) {
      return true;
    } else if (xN < oN) {
      return false;
    }
    return true;
  };

  const checkWin = mat => {
    let oCnt = 0;
    let xCnt = 0;
    for (let i = 0; i < 3; ++i) {
      if (mat[i][0] != 0 && mat[i][0] == mat[i][1] && mat[i][1] == mat[i][2]) {
        if (mat[i][0] == -1) {
          xCnt++;
        } else {
          oCnt++;
        }
      }
      if (mat[0][i] != 0 && mat[0][i] == mat[1][i] && mat[1][i] == mat[2][i]) {
        if (mat[0][i] == -1) {
          xCnt++;
        } else {
          oCnt++;
        }
      }
    }

    if (mat[1][1] != 0 && mat[0][0] == mat[1][1] && mat[1][1] == mat[2][2]) {
      if (mat[1][1] == -1) {
        xCnt++;
      } else {
        oCnt++;
      }
    }

    if (mat[1][1] != 0 && mat[2][0] == mat[1][1] && mat[1][1] == mat[0][2]) {
      if (mat[1][1] == -1) {
        xCnt++;
      } else {
        oCnt++;
      }
    }
    if (oCnt == 0 && xCnt == 0) {
      return true;
    } else if (oCnt == xCnt) {
      return false;
    } else {
      if (oCnt > xCnt) {
        return xN == oN;
      } else {
        return xN == oN + 1;
      }
    }
  };
  return checkNum() && checkWin(mat);
};

module.exports = validTicTacToe;
