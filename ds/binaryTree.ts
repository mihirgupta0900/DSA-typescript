class BstNode {
	data: number;
	leftNode: BstNode | null;
	rightNode: BstNode | null;
	constructor(
		data: number,
		left: BstNode | null = null,
		right: BstNode | null = null
	) {
		this.data = data;
		this.leftNode = left;
		this.rightNode = right;
	}
}

class BST {
	root: BstNode | null;
	constructor() {
		this.root = null;
	}

	searchAndAdd(node: BstNode, data: number): undefined | null {
		if (data < node.data) {
			if (node.leftNode == null) {
				node.leftNode = new BstNode(data);
				return;
			} else if (node.leftNode !== null) {
				return this.searchAndAdd(node.leftNode, data);
			}
		} else if (data > node.data) {
			if (node.rightNode === null) {
				node.rightNode = new BstNode(data);
			} else if (node.rightNode !== null) {
				this.searchAndAdd(node.rightNode, data);
			}
		} else {
			return null;
		}
	}

	add(data: number) {
		const node = this.root;
		if (node === null) {
			this.root = new BstNode(data);
			return;
		} else {
			return this.searchAndAdd(node, data);
		}
	}

	findMin() {
		let current = this.root;
		if (current === null) {
			return null;
		}
		while (current.leftNode !== null) {
			current = current.leftNode;
		}
		return current.data;
	}

	findMax() {
		let current = this.root;
		if (current === null) {
			return null;
		}
		while (current.rightNode !== null) {
			current = current.rightNode;
		}
		return current.data;
	}

	// findData(data:number) {
	//     let current = this.root;
	//     if(current !== null && current !== undefined){
	//         while(current?.data !== data) {
	//             if(data < current?.data) {
	//                 current = current?.leftNode
	//             }
	//         }
	//     }
	// }
}

const myTree = new BST();
myTree.add(200);
myTree.add(300);
myTree.add(400);
console.log(myTree.findMin());
console.log(myTree.findMax());
console.log(myTree);
