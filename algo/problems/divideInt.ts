function divide(dividend: number, divisor: number): number {
	let divdentMultiplier: number = dividend > 0 ? 1 : -1;
	let divisorMultiplier: number = divisor > 0 ? 1 : -1;
	let ans: number = 0;
	divisor = Math.abs(divisor);
	dividend = Math.abs(dividend);
	if (divisor === 1) {
		return handleFlow(dividend, divdentMultiplier, divisorMultiplier);
	}
	while (dividend >= divisor) {
		dividend = dividend - divisor;
		ans++;
	}
	return handleFlow(ans, divdentMultiplier, divisorMultiplier);
}

function handleFlow(
	num: number,
	divdentMultiplier: number,
	divisorMultiplier: number
): number {
	let MAX_INT: number = Math.pow(2, 31) - 1;
	let MIN_INT: number = -Math.pow(2, 31);
	let finalNum: number = divdentMultiplier * divisorMultiplier * num;
	if (finalNum >= MAX_INT) {
		return MAX_INT;
	} else if (finalNum <= MIN_INT) {
		return MIN_INT;
	} else {
		return finalNum;
	}
}

console.log(divide(-2147483648, 1));
