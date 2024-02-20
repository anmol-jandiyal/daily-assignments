let op = +prompt("enter the operation \n1. for addition \n 2. for subtraction \n 3. for multiplication\n 4. for division");

function add(v1, v2) {
	result = v1 + v2;
	console.log("result of addition = ", result);
}
function sub(v1, v2) {
	result = v1 - v2;
	console.log("result of subtraction= ", result);
}
function mul(v1, v2) {
	result = v1 * v2;
	console.log("result of multiplication = ", result);
}
function div(v1, v2) {
	result = v1 / v2;
	console.log("result of  divisiion= ", result);
}

if (isNaN(op) || !(op === 1 || op === 2 || op === 3 || op === 4)) {
	console.log("please enter no. from 1 to 4");
} else {
	let v1 = +prompt("enter value 1");
	let v2 = +prompt("enter value 2");
	let result;
	switch (op) {
		case 1:
			add(v1, v2);
			break;
		case 2:
			sub(v1, v2);
			break;
		case 3:
			mul(v1, v2);
			break;
		case 4:
			div(v1, v2);
			break;
	}
}
