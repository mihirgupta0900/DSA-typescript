function lengthOfLastWord(s: string): number {
	s = s.trim();
	if (s === " ") {
		return 0;
	}
	if (s.charAt(s.length - 1) === " ") {
		return 1;
	}
	let arr: string[] = s.split(/\s/);
	let lastWord: string = arr[arr.length - 1];
	return lastWord.length;
}

console.log(lengthOfLastWord("a"));
