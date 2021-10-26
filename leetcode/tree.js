class Node {
    data; left; right;
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    root;
    constructor(root) {
        this.root = new Node(root);
    }

    printInOrder() {
        const currRoot = this.root;
        const inOrder = [];
        function traverse(root) {
            if (root === null) {
                return;
            }
            traverse(root.left);
            inOrder.push(root.data);
            traverse(root.right);
        }
        // driver
        traverse(currRoot);
        console.log(inOrder);
    }

    printPreOrder() {
        const currRoot = this.root;
        const preOrder = [];
        function traverse(root) {
            if (root === null) {
                return;
            }
            preOrder.push(root.data);
            traverse(root.left);
            traverse(root.right);
        }
        // driver
        traverse(currRoot);
        console.log(preOrder);
    }

    insert_BST_Node(node) {
        // traverse the nodes
        const startRoot = this.root;
        function insertAt(currRoot, parent) {
            if (currRoot === null) {
                const leaf = new Node(node);
                if (node < parent.data) {
                    parent.left = leaf;
                } else {
                    parent.right = leaf;
                }
                return;
            }

            if (node < currRoot.data) {
                // traverse left
                return insertAt(currRoot.left, currRoot);
            }

            if (node > currRoot.data) {
                return insertAt(currRoot.right, currRoot);
            }
        }
        return insertAt(startRoot, null);
    }
}

module.exports = { Tree, Node };