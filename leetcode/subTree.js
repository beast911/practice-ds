/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


const isSame = function (p, q, existingState) {
    let nodeState = existingState;
    if (p === null && q === null) {
        return true;
    }
    if (p && q && p.val === q.val) {
        nodeState = true;
    } else {
        return false;
    }
    return isSame(p.left, q.left, nodeState) && isSame(p.right, q.right, nodeState);
}
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    return isSame(p, q, false);
};

/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
    if (root === null && subRoot === null) {
        return false;
    }
    const isSub = function (root, subRoot, state) {
        if (root === null && subRoot === null) {
            return false;
        }
        if (root !== null && subRoot !== null) {
            if (root.val === subRoot.val) {
                // the roots have same value so we can try to test if there is a subtree here
                return isSame(root, subRoot);
            } else {
                return isSub(root.left, subRoot, state) || isSub(root.right, subRoot, state);
            }
        } else {
            return state;
        }
    }
    return isSub(root, subRoot, false);

};