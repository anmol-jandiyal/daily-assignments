let op;
let exit;
do {
	op = prompt("enter the value to check if it is truthy or not");

	if (op === "" || op === "undefined" || op === "0" || op === "null" || op === "NaN" || op === "false") {
		alert("falsy value");
	} else {
		alert("truthy value");
	}

	exit = confirm("press ok  to exit");
	alert(exit);
} while (!exit);
