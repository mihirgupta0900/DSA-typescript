let unsortedArr: number[] = [5, 4, 90, 54, 6, 2, 340, 56, 32];

const bubbleSort = (array: number[]) => {
	let arr: number[] = array.slice(); //shallow copy of inpput array
	for (let i: number = 0; i < arr.length - 1; i++) {
		for (let j: number = 0; j < arr.length - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}
		}
	}
	return arr;
};

let sortedArr: number[] = bubbleSort(unsortedArr);

console.log(sortedArr);
// console.log(unsortedArr);
