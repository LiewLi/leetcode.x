/**
 * @param {string} text
 * @return {string}
 */
// var entityParser = function(text) {
//   const map = {
//     "&quot;": '"',
//     "&apos;": "'",
//     "&amp;": "&",
//     "&gt;": ">",
//     "&lt;": "<",
//     "&frasl;": "/"
//   };

//   const set = new Set(Object.keys(map));
//   let s = 0;
//   let e = s + 1;
//   let ret = "";
//   while (s < text.length) {
//     const t = text.substring(s, e);
//     if (set.has(t)) {
//       ret += map[t];
//       s = e;
//       e = s + 1;
//     } else {
//       e++;
//       if (e > text.length) {
//         ret += text.substring(s, s + 1);
//         s++;
//         e = s + 1;
//       }
//     }
//   }

//   return ret;
// };

var entityParser = function(text) {
  const map = {
    "&quot;": '"',
    "&apos;": "'",
    //  "&amp;": "&",
    "&gt;": ">",
    "&lt;": "<",
    "&frasl;": "/"
  };

  for (const [key, val] of Object.entries(map)) {
    text = text.replace(new RegExp(key, "g"), val);
  }

  return text.replace(/&amp;/g, "&");
};
