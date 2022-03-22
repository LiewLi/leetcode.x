/**
 * @param {string[]} source
 * @return {string[]}
 */
var removeComments = function(source) {
  let inBlock = false;
  const ret = [];
  let newLine = null;
  for (const line of source) {
    if (!inBlock) {
      newLine = "";
    }
    for (let i = 0; i < line.length; ++i) {
      if (!inBlock && line.substring(i, i + 2) === "/*") {
        inBlock++;
        i++;
      } else if (!inBlock && line.substring(i, i + 2) === "//") break;
      else if (inBlock && line.substring(i, i + 2) === "*/") {
        i++;
        inBlock = false;
      } else if (!inBlock) {
        newLine += line[i];
      }
    }
    if (newLine && !inBlock) {
      ret.push(newLine);
    }
  }

  return ret;
};

console.log(
  removeComments([
    "/*Test program */",
    "int main()",
    "{ ",
    "  // variable declaration ",
    "int a, b, c;",
    "/* This is a test",
    "   multiline  ",
    "   comment for ",
    "   testing */",
    "a = b + c;",
    "}"
  ])
);
