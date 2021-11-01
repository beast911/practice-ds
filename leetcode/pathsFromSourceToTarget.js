function basicBfs() {
  // breadth first search
  // find all paths starting from a point
  const q = [];
  const visited = [];
  const bfs = () => {
    if (q.length === 0) {
      return;
    }
    const curr = q.shift();
    visited[curr] = true;
    const curList = graphs[curr];
    for (let i = 0; i < curList.length; i++) {
      const element = curList[i];
      if (!visited[element]) {
        q.push(element);
      }
    }
    bfs();
  }
  const first = graphs[0];
  q.push(0);
  for (let j = 0; j < first.length; j++) {
    const element = first[j];
    visited[element] = true;
    q.push(element)
  }
  bfs();
}

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graphs) {
  // DFS
  const finalList = [];
  const findPath = (start, visited) => {
    if (start === graphs.length - 1) {
      finalList.push(visited);
    }
    for (let i = 0; i < graphs[start].length; i++) {
      const element = graphs[start][i];
      findPath(element, [...visited, element]);
    }
  }
  findPath(0, [0]);
  console.log(finalList)
};

allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []])