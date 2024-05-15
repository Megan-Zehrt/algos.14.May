// 617. Merge Two Binary Trees



// You are given two binary trees root1 and root2.
// Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.
// Return the merged tree.
// Note: The merging process must start from the root nodes of both trees.





/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var mergeTrees = function(root1, root2) {
    if (root1 == null && root2 == null) {
        return null;
    }

    if (root1 == null) return root2;
    if (root2 == null) return root1;

    // Create a new TreeNode by summing the values of the overlapping nodes
    var mergedNode = new TreeNode(root1.val + root2.val);

    // Recursively merge the left children and assign to the left of the new node
    mergedNode.left = mergeTrees(root1.left, root2.left);

    // Recursively merge the right children and assign to the right of the new node
    mergedNode.right = mergeTrees(root1.right, root2.right);

    return mergedNode;
};
