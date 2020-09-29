function removeElement(nums: number[], val: number): number {
	for (let i: number = 0; i < nums.length; ) {
		if (nums[i] === val) {
			nums.splice(i, 1);
			continue;
		}
		i++;
		continue;
	}
	return nums.length;
}

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));

/*Given nums = [3,2,2,3], val = 3, */
