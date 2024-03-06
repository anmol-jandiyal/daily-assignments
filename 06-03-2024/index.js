const regExp = /^\d{16}$/;

class BankAccount {
	#accNo = null;

	constructor(accNo, accHolderName, balance = 0) {
		if (accNo && accHolderName && balance) {
			if (balance < 0) {
				console.log("Balance cannot be less than 0 ");
				return;
			}
			if (!regExp.test(accNo)) {
				console.log("Acc no. must consist of 16 digits");
				return;
			}

			(this.accNo = accNo), (this.accHolderName = accHolderName), (this.balance = balance);

			console.log("Account Created", this);
		} else {
			console.log("please provide all the fields Name and account no.");
		}
	}

	deposite(depositeAmt) {
		if (depositeAmt < 0) {
			console.log("Minimum deposite must be 1 or more ");
			return;
		}
		this.balance += depositeAmt;
		console.log({ Message: "Successful Deposite", Deposite: depositeAmt, currentBalance: this.balance });
	}

	withdraw(withdrawAmt) {
		if (withdrawAmt < 0) {
			console.log("Minimum withdraw must be 1 or more ");
			return;
		}
		if (withdrawAmt > this.balance) {
			console.log("Amount specified not present");
			return;
		}
		this.balance -= withdrawAmt;
		console.log({ Message: "Successful withdrawal", withdraw: withdrawAmt, currentBalance: this.balance });
	}

	displayBalance() {
		console.log("Current Balance : ", this.balance);
		return this.balance;
	}
}

class SavingAccount extends BankAccount {
	static withdrawLimit = 100000;
	static penalty = 500;

	constructor(accNo, accHolderName, balance) {
		super(accNo, accHolderName, balance);
	}

	withdraw(withdrawAmt) {
		let checkPenalty = false;
		if (withdrawAmt > SavingAccount.withdrawLimit) {
			checkPenalty = true;
		}
		super.withdraw(withdrawAmt + (checkPenalty ? SavingAccount.penalty : 0));
	}

	addInterest(rate) {
		const interest = (this.balance * rate) / 100;
		this.balance += interest;

		console.log({ Message: "Interest added", interest: interest, currentBalance: this.balance });
	}
}
const newAcc = new SavingAccount("1234567891012135", "Anmol", 4400000);

console.log(newAcc);
newAcc.addInterest(100);
newAcc.deposite(100000);
newAcc.withdraw(40);
newAcc.withdraw(200000);
