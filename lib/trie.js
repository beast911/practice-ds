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


module.exports = Trie;