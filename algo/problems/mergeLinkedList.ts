/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import { ListNode } from "./addLinkedListElements";

function mergeTwoLists(
	l1: ListNode | null,
	l2: ListNode | null
): ListNode | null {
	let arr1: number[] = linkedListToList(l1);
	let arr2: number[] = linkedListToList(l2);
	let mergedList: number[] = arr1.concat(arr2).sort();
	return listToLinkedList(mergedList);
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

// let node1: ListNode = listToLinkedList([1, 2, 4]);
let node1: ListNode = listToLinkedList([]);
console.log(node1);
// let node2: ListNode = listToLinkedList([1, 3, 4]);
let node2: ListNode = listToLinkedList([]);
console.log(node2);
console.log(mergeTwoLists(node1, node2));
