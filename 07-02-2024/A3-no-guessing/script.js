let scores = []; //to store score of each game

// functions================================

//displaying scores of each round
function displayScore(sco) {
	for (let [index, value] of sco.entries()) {
		console.log(`round no. ${index + 1} : score = ${value}`);
	}
}
//gussing the value logic and returns no. of attempts taken to guess the no.
function guessValue(key) {
	let attempt = 0;
	let guess;

	while (1) {
		guess = +prompt("guess the no.");

		if (isNaN(guess) || guess < 1 || guess > 100) {
			alert("enter the no. between 1 and 100 (inclusive)");
			continue;
		}

		attempt++;

		if (guess < key) {
			alert("low");
		} else if (guess > key) {
			alert("high");
		} else {
			break;
		}
	}
	return attempt;
}

function gamePlay() {
	let attempts;
	let rand = Math.floor(Math.random() * 100) + 1;

	alert(rand);

	attempts = guessValue(rand);

	alert(`No. of attempts = ${attempts}`);

	//inserting the score of each round in "score" array
	scores.push(attempts);
}

function beginEnd() {
	let check;

	do {
		gamePlay();
		check = confirm("ok - to play again \n cancel - to exit");
	} while (check === true);
}

// ////////////////////////////////////////////////////////
// calling function to start the game
beginEnd();

displayScore(scores);
