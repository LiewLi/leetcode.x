let id = 1001;
const codeTable =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const urlMap = {};
const codeMap = [...codeTable].reduce((ret, cur, idx) => {
  ret[cur] = idx;
  return ret;
}, {});
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
  let urlId = id++;
  urlMap[urlId] = longUrl;
  let tinyURL = "";
  while (urlId) {
    tinyURL = codeTable[urlId % codeTable.length] + tinyURL;
    urlId = Math.floor(urlId / codeTable.length);
  }
  return tinyURL;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
  let urlId = 0;
  for (const ch of shortUrl) {
    urlId = urlId * codeTable.length + codeMap[ch];
  }
  return urlMap[urlId];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

console.log(decode(encode("http://leetcode.com")));
