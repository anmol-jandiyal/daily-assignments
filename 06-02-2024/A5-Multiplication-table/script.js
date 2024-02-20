let no = +prompt("enter the no. whose table is wanted");

if (isNaN(no)) {
	console.log("error : please enter the numeric value");
} else {
	let i = 1;
	while (i <= 10) {
		console.log(no, " x ", i, " = ", no * i);
		i++;
	}
}
