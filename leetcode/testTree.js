const Tree = require('./tree.js');

const myTree = new Tree(4);
myTree.insert_BST_Node(1);
myTree.insert_BST_Node(3);
myTree.insert_BST_Node(2);
console.log(myTree);
console.log(myTree.printInOrder());
console.log(myTree.printPreOrder());