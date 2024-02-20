// si=p*r*t/100

let priAmt = parseFloat(prompt("Enter Principal amount"));
let rate = parseFloat(prompt("Enter Rate of Interest"));
let time = parseFloat(prompt("Enter Time"));

if (isNaN(priAmt) || isNaN(rate) || isNaN(time)) {
	console.error("enter numeric value only");
} else {
	let si = (priAmt * rate * time) / 100;
	console.log("simple interest over the principal amount of ", priAmt, " at rate of ", rate, " for the period of ", time, "years = ", si);
}
