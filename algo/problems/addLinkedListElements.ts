//Definition for singly-linked list.
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function addTwoNumbers(
	l1: ListNode | null,
	l2: ListNode | null
): ListNode | null {
	const num1: string = convertListToNumber(l1);
	const num2: string = convertListToNumber(l2);
	const sum = add(num1, num2);
	console.log(sum);
	return convertStringNumberToList(sum);
}

function convertListToNumber(linkedList: ListNode | null): string {
	let list = linkedListToList(linkedList);
	let sNum: string = list.reverse().join("");
	return sNum;
}

function convertStringNumberToList(num: string): ListNode {
	let numList: string[] = num.split("");
	let currentNode: ListNode = new ListNode(Number(numList[0]));
	for (let i: number = 1; i < numList.length; i++) {
		let val: number = Number(numList[i]);
		currentNode = new ListNode(val, currentNode);
	}
	return currentNode;
}

function linkedListToList(linkList: ListNode | null) {
	let arr: string[] = [];
	let current: ListNode | null = linkList;
	while (current) {
		arr.push(current.val.toString());
		current = current.next;
	}
	return arr;
}

/**
 * Program to add VERY large numbers in javascript
 * Note - numbers should be passed as strings.
 * example -
 * add("15", "15");  // returns "30"
 *
 */
function add(str1: string, str2: string) {
	let sum: string = ""; // our result will be stored in a string.

	// we'll need these in the program many times.
	let str1Length: number = str1.length;
	let str2Length: number = str2.length;

	// if s2 is longer than s1, swap them.
	if (str2Length > str1Length) {
		let temp = str2;
		str2 = str1;
		str1 = temp;
	}

	let carry: number = 0; // number that is carried to next decimal place, initially zero.
	let a: number;
	let b: number;
	let temp: string;
	let digitSum: string;
	for (let i = 0; i < str1.length; i++) {
		a = parseInt(str1.charAt(str1.length - 1 - i)); // get ith digit of str1 from right, we store it in a
		b = parseInt(str2.charAt(str2.length - 1 - i)); // get ith digit of str2 from right, we store it in b
		b = b ? b : 0; // make sure b is a number, (this is useful in case, str2 is shorter than str1
		temp = (carry + a + b).toString(); // add a and b along with carry, store it in a temp string.
		digitSum = temp.charAt(temp.length - 1); //
		carry = parseInt(temp.substr(0, temp.length - 1)); // split the string into carry and digitSum ( least significant digit of abSum.
		carry = carry ? carry : 0; // if carry is not number, make it zero.

		sum = i === str1.length - 1 ? temp + sum : digitSum + sum; // append digitSum to 'sum'. If we reach leftmost digit, append abSum which includes carry too.
	}

	return sum; // return sum
}

// Extra Functions
function convertNumberToList(num: number): ListNode {
	let numList: string[] = num.toString().split("");
	let currentNode: ListNode = new ListNode(Number(numList[0]));
	for (let i: number = 1; i < numList.length; i++) {
		let val: number = Number(numList[i]);
		currentNode = new ListNode(val, currentNode);
	}
	return currentNode;
}

function printListData(list: ListNode | null) {
	let current: ListNode | null = list;
	while (current) {
		console.log(current.val);
		current = current.next;
	}
}

function listToLinkedList(arr: number[]): ListNode {
	let currentNode: ListNode = new ListNode(Number(arr[arr.length - 1]));
	for (let i: number = arr.length - 2; i >= 0; i--) {
		let val: number = Number(arr[i]);
		currentNode = new ListNode(val, currentNode);
	}
	return currentNode;
}

// const ll = listToLinkedList([0, 8, 6, 5, 6, 8, 3, 5, 7]);
// printListData(ll);

// const linkList = listToLinkedList([0, 3, 4]);
// console.log(linkList);
// console.log(number);

const check1: ListNode = listToLinkedList([
	1,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	1,
]);
const check2: ListNode = listToLinkedList([5, 6, 4]);

addTwoNumbers(check1, check2);
