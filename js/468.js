/**
 * @param {string} IP
 * @return {string}
 */

function validIPV4(IP) {
  const sub = IP.split(".");
  if (sub.length !== 4) return false;
  for (const s of sub) {
    if (!/^[0-9]{1,3}$/.test(s)) return false;
    if (+s < 0 || +s > 255) return false;
    if (s[0] == "0" && s.length > 1) return false;
  }
  return true;
}

function validIPV6(IP) {
  const sub = IP.split(":");
  if (sub.length !== 8) return false;
  for (const s of sub) {
    if (s.length > 4 || !/^[0-9a-fA-F]+$/.test(s)) return false;
  }
  return true;
}

var validIPAddress = function(IP) {
  if (IP.indexOf(".") >= 0 && validIPV4(IP)) return "IPv4";
  else if (IP.indexOf(":") >= 0 && validIPV6(IP)) return "IPv6";
  return "Neither";
};

console.log(validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334"));
