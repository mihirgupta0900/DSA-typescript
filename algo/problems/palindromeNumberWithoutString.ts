function isPalindromeWihoutString(x: number): boolean {
	let revNum: number = 0;
	let rem: number = 0;
	let copy: number = x;
	while (x > 0) {
		rem = x % 10;
		x = Math.floor(x / 10);
		revNum = revNum * 10 + rem;
	}
	if (revNum === copy) {
		return true;
	}
	return false;
}

console.log(isPalindrome(121));
