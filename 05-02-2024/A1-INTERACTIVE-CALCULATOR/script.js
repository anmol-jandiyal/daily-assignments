let num1 = parseFloat(prompt("Enter no. 1: "));
let num2 = parseFloat(prompt("Enter no. 2: "));

// console.log(num1, num2);

if (isNaN(num1) || isNaN(num2)) {
	console.error("PLEASE RELOAD AND ENTER NUMBER ONLY");
} else {
	console.log("Addition", num1 + num2);
	console.log("Subtraction", num1 - num2);
	console.log("Multiplication", num1 * num2);
	console.log("Division", num1 / num2);
}
