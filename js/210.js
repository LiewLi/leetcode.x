/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  const edges = new Array(numCourses);
  for (let i = 0; i < numCourses; ++i) {
    edges[i] = [];
  }

  for (const e of prerequisites) {
    edges[e[0]].push(e[1]);
  }

  const visited = new Array(numCourses).fill(false);
  const recStack = new Array(numCourses).fill(false);
  const stack = [];

  for (let i = 0; i < numCourses; ++i) {
    if (!dfs(i)) {
      return [];
    }
  }

  return stack;

  function dfs(node) {
    if (!visited[node]) {
      recStack[node] = true;
      visited[node] = true;
      for (const e of edges[node]) {
        if (recStack[e]) {
          return false;
        } else if (!visited[e] && !dfs(e)) {
          return false;
        }
      }
      recStack[node] = false;
      stack.push(node);
    }

    return true;
  }
};

console.log(findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]]));
