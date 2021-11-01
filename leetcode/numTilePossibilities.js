/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
  const possibilities = new Set();
  const getPossibilities = (tiles, subS) => {
    if (tiles.length === 0) {
      return;
    }
    for (let i = 0; i < tiles.length; i++) {
      const element = tiles[i];
      const currSub = subS + element;
      possibilities.add(currSub);
      getPossibilities(tiles.substring(0, i) + tiles.substring(i + 1), currSub)
    }
  }
  getPossibilities(tiles, '');
  return possibilities.size;
};

console.log(numTilePossibilities('AAB'));