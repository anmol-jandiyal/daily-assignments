let value = +prompt("enter the no.");

if (isNaN(value)) {
	console.log("enter the numeric value");
} else {
	if (value < 0) {
		console.log("negative no.");
	} else if (value > 0) {
		console.log("positive no.");
	} else {
		console.log("zero");
	}
}
