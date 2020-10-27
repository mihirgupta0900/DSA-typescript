import { TreeNode } from "./listToBST";
export function sortedArrayToBST(nums: number[]): TreeNode | null {
	if (nums === null || nums.length === 0) {
		return null;
	}
	return contrustBST(nums, 0, nums.length - 1);
}

function contrustBST(
	array: number[],
	leftIndex: number,
	rightIndex: number
): TreeNode | null {
	if (leftIndex > rightIndex) {
		return null;
	}

	let mid: number =
		(rightIndex - leftIndex + 1) % 2 !== 0
			? leftIndex + (rightIndex - leftIndex) / 2
			: leftIndex + (rightIndex - leftIndex + 1) / 2;
	let current: TreeNode = new TreeNode(array[mid]);
	current.left = contrustBST(array, leftIndex, mid - 1);
	current.right = contrustBST(array, mid + 1, rightIndex);
	return current;
}
