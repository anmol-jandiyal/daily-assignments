let percentage = +prompt("enter the no.");

if (isNaN(percentage) || percentage > 100 || percentage < 0) {
	console.log("enter the numeric percentage or enter between 0 and 100");
} else {
	if (percentage > 80 && percentage <= 100) {
		console.log("GRADE: A");
	} else if (percentage > 60 && percentage <= 80) {
		console.log("GRADE : B");
	} else if (percentage > 40 && percentage <= 60) {
		console.log("GRADE : C");
	} else if (percentage > 20 && percentage <= 40) {
		console.log("GRADE : D");
	} else {
		console.log("GRADE: E");
	}
}
