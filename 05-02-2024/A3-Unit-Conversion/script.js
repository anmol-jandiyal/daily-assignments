let choice, u1, u2;

do {
	choice = prompt("enter the choice for conversion \n 1. km to miles \n 2. celsius to fahrenheit");
} while (!(choice == "1" || choice == "2"));

// until the user eenter numeric value, this loop keep on executing
do {
	u1 = parseFloat(prompt("Enter the value to be converted to other unit"));
} while (isNaN(u1));

if (choice == "1") {
	//km to miles
	u2 = u1 * 0.621371;
	console.log(u1, "Km = ", u2, "miles");
} else if (choice == "2") {
	//celsius to fahrenheit
	u2 = (9 / 5) * u1 + 32;

	console.log(u1, " celsius =", u2, " fahrenheit");
}
