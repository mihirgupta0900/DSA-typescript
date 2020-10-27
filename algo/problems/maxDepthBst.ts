import { sortedArrayToBST } from "./arrayToBST";
import { TreeNode } from "./listToBST";
// import { sortedArrayToBST } from "./arrayToBST";
function maxDepth(root: TreeNode | null): number {
	if (root === null) {
		return 0;
	}
	let leftHeight: number = maxDepth(root.left);
	let rightHeight: number = maxDepth(root.right);
	if (leftHeight > rightHeight) {
		return leftHeight + 1;
	} else {
		return rightHeight + 1;
	}
}

let testArr: number[] = [1, 3, 4, 5, 6, 7, 8, 10, 15];
let rootBST: TreeNode | null = sortedArrayToBST(testArr);
console.log(maxDepth(rootBST));
