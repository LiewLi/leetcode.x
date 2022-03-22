/**
 * @param {number} N
 * @return {number}
 */
var primePalindrome = function(N) {
  function countDigits(n) {
    let ret = 0;
    while (n) {
      ret++;
      n = Math.floor(n / 10);
    }
    return ret;
  }

  function isPrime(n) {
    if (n <= 1) return false;
    let i = 2;
    while (i * i <= n) {
      if (n % i === 0) return false;
      i++;
    }
    return true;
  }

  function gen(cnt, idx, N, arr) {
    if (idx > Math.floor(cnt / 2)) {
      const num = +arr.join("");
      if (num >= N && isPrime(num)) return num;
      return;
    }
    for (let i = 0; i <= 9; ++i) {
      arr[idx] = arr[cnt - idx - 1] = i;
      const ans = gen(cnt, idx + 1, N, arr);
      if (ans) return ans;
    }
  }

  let cnt = countDigits(N);
  let ans = undefined;
  while (!ans) {
    ans = gen(cnt, 0, N, new Array(cnt).fill(0));
    cnt++;
  }

  return ans;
};
