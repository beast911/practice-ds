let Trie = function() { this.root = {}; };

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let node = this.root;
  for (const letter of word) {
    if (!node[letter]) {
      node[letter] = {};
    }
    node = node[letter];
  }
  node.isEnd = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let node = this.root
  for (let letter of word)
  {
    // check if current letter is in the node
    if (!node[letter]) {
      return false;
    } else {
      node = node[letter];
    }
  }

  return node && node.isEnd === true;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let node = this.root;
  for (let letter of prefix) {
    if (!node[letter]) {
      return false;
    } else {
      node = node[letter];
    }
  }
  return true;
};

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  let root = new Trie();
  words.forEach(word => { root.insert(word); });
  const rowLen = board.length;
  const colLen = board[0].length;
  let res = new Set();
  let visited = new Set();

  const process = (r, c, node, word) => {
    if (r < 0 || c < 0 || r === rowLen || c === colLen || visited.has(`${r}_${c}`)
        || !node[board[r][c]]) {
      return;
    }
    console.log(node);
    visited.add(`${r}_${c}`);
    node = node[board[r][c]];
    word += board[r][c];
    if (node.isEnd) {
      res.add(word);
    }

    process(r + 1, c, node, word);
    process(r - 1, c, node, word);
    process(r, c + 1, node, word);
    process(r, c - 1, node, word);

    visited.delete(`${r}_${c}`);
  };
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      process(i, j, root, '')
    }
  }
  return res;
};

console.log(findWords(
  [
    [ "o", "a", "a", "n" ], [ "e", "t", "a", "e" ], [ "i", "h", "k", "r" ], [ "i", "f", "l", "v" ]
  ],
  [ "oath", "pea", "eat", "rain" ]));
