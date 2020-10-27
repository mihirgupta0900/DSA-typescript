// Definition for singly-linked list.
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

// Definition for a binary tree node.
export class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

function sortedListToBST(head: ListNode | null): TreeNode | null {
	const MAX_VAL: number = Math.pow(10, 5);
	const MIN_VAL: number = -MAX_VAL;
	let arr: number[] = linkedListToList(head);
	if (arr === null || arr.length === 0) {
		return null;
	}
	return contrustBST(arr, 0, arr.length - 1);
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

function linkedListToList(linkList: ListNode | null): number[] {
	let arr: number[] = [];
	let current: ListNode | null = linkList;
	while (current) {
		arr.push(current.val);
		current = current.next;
	}
	return arr;
}

function midIndex(length: number): number {
	return length % 2 !== 0 ? (length - 1) / 2 : length / 2;
}

let testArr: number[] = [1, 3, 4, 8, 9];
// testArr.splice(2, 1);
let listN = listToLinkedList(testArr);
console.log(sortedListToBST(listN));
// console.log(listN);

function listToLinkedList(arr: number[]): ListNode {
	// if (arr.length === 0) {
	// 	return null;
	// }
	let currentNode: ListNode = new ListNode(Number(arr[arr.length - 1]));
	for (let i: number = arr.length - 2; i >= 0; i--) {
		let val: number = Number(arr[i]);
		currentNode = new ListNode(val, currentNode);
	}
	return currentNode;
}

function lengthOfList(head: ListNode | null): number {
	let current = head;
	let length: number = 1;
	while (current !== null) {
		length++;
		current = current.next;
	}
	return length;
}
