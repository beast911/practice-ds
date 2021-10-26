const { Tree, Node } = require('./tree.js');

// maximum path sum of any tree

function maxPath(root) {

    function max(root, parent) {
        if (root !== null) {
            const singleSum = Math.max(max(root.left, root), max(root.right, root));
            console.log(max(root.left, root), max(root.right, root))
            console.log(`sum at ${root.data} ${singleSum} ${parent}`);
            return singleSum ;
        } else {
            console.log(`leaf ${parent.data}`)
            return parent.data;
        }
    }
    return max(root, null);
}


const myRoot = new Node(10);
myRoot.left = new Node(2);
myRoot.left.left = new Node(20);
myRoot.left.right = new Node(1);

myRoot.right = new Node(-25);
myRoot.right.left = new Node(3);
myRoot.right.left = new Node(4);


console.log(maxPath(myRoot));