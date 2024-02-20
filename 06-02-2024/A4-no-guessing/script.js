let attempt = 0;

let guess;
let rand;
let check = 1;

do {
	attempt = 0;
	rand = Math.floor(Math.random() * 100) + 1;

	while (1) {
		guess = +prompt("guess the no.");

		if (isNaN(guess) || guess < 1 || guess > 100) {
			alert("enter the no. between 1 and 100 (inclusive)");
			continue;
		}

		attempt++;

		if (guess < rand) {
			alert("low");
		} else if (guess > rand) {
			alert("high");
		} else {
			break;
		}
	}

	alert("no. of attempts", attempt);
	do {
		check = +prompt("1: to play again \n 2. to exit");
	} while (!(check == 1 || check == 2));
} while (check === 1);
