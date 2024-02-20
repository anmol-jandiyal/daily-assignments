function sumNumber(arr) {
	let sum = 0;

	for (let ele of arr) {
		if (typeof ele === "number" && !isNaN(ele)) {
			sum += ele;
		}
	}
	return sum;
}

const arr = [1, 2, 4, 2, 5, "abc", null, undefined, "bcd", NaN, false];

console.log("sum of numbered element is equal to ", sumNumber(arr));
