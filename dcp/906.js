/**
 * Given a set of points (x, y) on a 2D cartesian plane, find the two closest points.
 * For example, given the points
 * [(1, 1), (-1, -1), (3, 4), (6, 1), (-1, -6), (-4, -3)],
 * return [(-1, -1), (1, 1)]
 */

// Dynamic programming problem

const calculateDistance = (a, b) => {
  const x = Math.abs(a[0] - b[0]);
  const y = Math.abs(a[1] - b[1]);
  const distance =
    Math.round(Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) * 100) / 100;
  return distance;
};

const closestPoints = (listOfPoints) => {
  let min = Number.MAX_SAFE_INTEGER;
  listOfPoints.forEach((point, index) => {
    for (let i = index + 1; i < listOfPoints.length; i++) {
      const currDist = calculateDistance(point, listOfPoints[i]);
      if (min > currDist) {
        min = currDist;
      }
    }
  });
  return min;
};

console.log(
  closestPoints([
    [3, 4],
    [6, 1],
    [1, 1],
    [-1, -6],
    [-4, -3],
    [-1, -1],
  ])
);
