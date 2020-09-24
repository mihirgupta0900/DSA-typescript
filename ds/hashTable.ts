class NaiveDict<T> {
	keys: string[];
	values: T[];
	constructor() {
		this.keys = [];
		this.values = [];
	}

	// SET
	setItem(key: string, value: T) {
		this.keys.push(key);
		this.values.push(value);
	}

	// GET
	getItem(lookupKey: string) {
		for (let i: number = 0; i < this.keys.length; i++) {
			let key: string = this.keys[i];
			if (key === lookupKey) {
				return this.values[i];
			}
		}
	}
}

const myDict = new NaiveDict();
myDict.setItem("first", "Mihir");
console.log(myDict.getItem("first"));

/*  
The above is implementation is very slow, and has O(n) at the very worst
*/

class ListNode<T> {
	data: [string, T];
	next: ListNode<T> | null;
	constructor(data: [string, T], next: ListNode<T> | null = null) {
		this.data = data;
		this.next = next;
	}
}

// Hash Table with Separate Chaining with Singly Linked List
class HashTable<T> {
	private hashTable: ListNode<T>[];
	constructor(private hashSize = 137) {
		this.hashTable = new Array(hashSize);
	}

	public setItem(key: string, value: T) {
		let hash: number = this.stringToHash(key);
		if (this.hashTable[hash]) {
			this.hashTable[hash].next = new ListNode<T>([key, value]);
		}
		this.hashTable[hash] = new ListNode<T>([key, value]);
	}

	public getItem(key: string) {
		let hash: number = this.stringToHash(key);
		let curr: ListNode<T> | null = this.hashTable[hash];
		while (curr) {
			if (curr.data[0] === key) {
				return curr.data[1];
			}
			curr = curr.next;
		}
	}

	private stringToHash(key: string) {
		let hash: number = 0;
		let chr: number = 0;
		if (key.length === 0) return hash;
		for (let i: number = 0; i < key.length; i++) {
			chr = key.charCodeAt(i);
			hash = (hash << 5) - hash + chr;
			hash |= 0; // Convert to 32bit integer
		}
		return hash;
	}
}

const myTable = new HashTable();
myTable.setItem("first", "Mihir");
myTable.setItem("last", "Gupta");
console.log(myTable.getItem("last"));
