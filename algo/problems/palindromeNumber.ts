function isPalindrome(x: number): boolean {
	const xString: string = x.toString();
	const xStringRev: string = xString.split("").reverse().join("");
	if (xString === xStringRev) {
		return true;
	}
	return false;
}

console.log(isPalindrome(-1121));
