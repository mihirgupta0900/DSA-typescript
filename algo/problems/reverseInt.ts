function reverse(x: number): number {
	const multiplier: number = x < 0 ? -1 : 1;
	const val: number = Number(
		Math.abs(x).toString().split("").reverse().join("")
	);
	if (val > 2147483648) {
		return 0;
	}
	return val * multiplier;
}

console.log(reverse(1534236469));
