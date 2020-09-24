class ListNode {
	data: number;
	next: ListNode | null | undefined;
	constructor(data: number, next: ListNode | null = null) {
		this.data = data;
		this.next = next;
	}
}

export class LinkedList {
	head: ListNode | null;
	size: number;
	constructor() {
		this.head = null;
		this.size = 0;
	}

	// Insert at first node
	insertFirst(data: number) {
		this.head = new ListNode(data, this.head);
		this.size++;
	}

	// Insert at last node
	insertLast(data: number) {
		let node = new ListNode(data, null);
		let current: ListNode | null;

		// if empty
		if (!this.head) {
			this.head = node;
		} else {
			current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = node;
			this.size++;
		}
	}

	// Insert at index
	insertAt(data: number, index: number) {
		// if index is 0
		if (index === 0) {
			this.insertFirst(data);
		}

		// if index out of range
		if (index > 0 && index > this.size) {
			return;
		}

		let current: ListNode | null | undefined = this.head;
		let previous: ListNode | null | undefined;
		let count: number = 0;
		let node: ListNode = new ListNode(data);

		while (count < index) {
			previous = current;
			current = current?.next;
			count++;
		}

		node.next = current;
		if (previous?.next) {
			previous.next = node;
		}
	}

	// Print list
	printListData() {
		let current: ListNode | null | undefined = this.head;
		while (current) {
			console.log(current.data);
			current = current?.next;
		}
	}
}
