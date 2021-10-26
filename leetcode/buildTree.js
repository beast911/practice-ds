const { Node: TreeNode } = require('./tree');


var buildTree = function (preorder, inorder) {
    const build = (startInPreorder, currentInorder) => {
        if (startInPreorder === preorder.length) {
            return null;
        }
        const positionInOrder = currentInorder.indexOf(preorder[startInPreorder]);
        if (positionInOrder !== -1) {

            const val = currentInorder[positionInOrder];
            const root = new TreeNode(val);
            // split the array at positionInOrder
            const rightSide = currentInorder.slice(positionInOrder + 1);
            const leftSide = currentInorder.slice(0, positionInOrder);
            root.left = build(startInPreorder + 1, leftSide);
            root.right = build(startInPreorder + 1, rightSide);
            return root;
        }
    }
    return build(0, inorder);
};

console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]))