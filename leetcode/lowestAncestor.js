const { Node } = require('./tree');

var lowestCommonAncestor = function (root, p, q) {
    const lowest = function (root, val) {
        if (root === null) {
            return val;
        }
        const value = root.data;
        if (value <= p && value <= q) {
            // go left
            return lowest(root.right, value);
        } else if (value >= p && value >= q) {
            return lowest(root.left, value);
        } else {
            return value;
        }
    }
    return lowest(root, null);
};

const root = new Node(6);
root.left = new Node(2);
root.left.left = new Node(0);
root.left.right = new Node(4);
root.left.right.left = new Node(3);
root.left.right.right = new Node(5);

root.right = new Node(8);
root.right.left = new Node(7);
root.right.right = new Node(9);


const nRoot = new Node(2);
nRoot.left = new Node(1);
console.log(lowestCommonAncestor(root,2, 4));