// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var countSmaller = function(nums) {
//   const ret = [];
//   for (let i = 0; i < nums.length; ++i) {
//     let cnt = 0;
//     for (let j = i + 1; j < nums.length; ++j) {
//       if (nums[j] < nums[i]) cnt++;
//     }
//     ret.push(cnt);
//   }
//   return ret;
// };

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
  function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.repeat = 1;
    this.leftCnt = 0;
  }

  let root = null;

  function insert(val) {
    if (root === null) {
      root = new Node(val);
      return 0;
    } else {
      let count = 0;
      let cur = root;
      while (true) {
        if (cur.val < val) {
          count += cur.repeat + cur.leftCnt;
          if (cur.right) {
            cur = cur.right;
          } else {
            cur.right = new Node(val);
            return count;
          }
        } else if (cur.val > val) {
          cur.leftCnt += 1;
          if (cur.left) {
            cur = cur.left;
          } else {
            cur.left = new Node(val);
            return count;
          }
        } else {
          cur.repeat += 1;
          return count + cur.leftCnt;
        }
      }
    }
  }

  const ret = [];
  for (let i = nums.length - 1; i >= 0; --i) {
    ret[i] = insert(nums[i]);
  }
  return ret;
};

console.log(countSmaller([5, 2, 6, 1]));
