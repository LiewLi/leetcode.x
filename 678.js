/**
 * @param {string} s
 * @return {boolean}
 */
// var checkValidString = function(s) {
//   if (s.length <= 0) return true;

//   const _ = (stack, s, idx) => {
//     while (idx < s.length) {
//       let ch = s[idx];
//       if (ch == "(") {
//         stack.push(1);
//       } else if (ch == ")") {
//         if (stack.length > 0) stack.pop();
//         else return false;
//       } else if (ch === "*") {
//         if (_([...stack, 1], s, idx + 1)) return true;
//         if (stack.length > 0) {
//           let ss = [...stack];
//           ss.pop();
//           if (_(ss, s, idx + 1)) return true;
//         }
//       }
//       idx++;
//     }
//     return stack.length === 0;
//   };

//   return _([], s, 0);
// };

var checkValidString = function(s) {
  const stack = [];
  const stack1 = [];
  let i = 0;
  for (const ch of s) {
    if (ch === "(") stack.push(i);
    else if (ch === "*") stack1.push(i);
    else {
      if (!stack1.length && !stack.length) return false;
      if (stack.length) stack.pop();
      else stack1.pop();
    }

    ++i;
  }

  while (stack.length) {
    if (stack1.length && stack1[stack1.length - 1] > stack[stack.length - 1]) {
      stack1.pop();
      stack.pop();
    } else return false;
  }
  return true;
};

console.log(checkValidString("(*))"));
