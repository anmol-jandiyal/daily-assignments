// book object  // constructor construct to create objects of book

function Book(id, title, author) {
	this.id = id;
	this.title = title;
	this.author = author;
	this.isBorrowed = false;
}

const LMS = {
	// library array
	library: [],

	//checking if same book already registered or not
	//isregistered will return null if book is not registerd in the system
	isRegisterd: function (id) {
		for (let b of this.library) {
			if (b.id === id) {
				return b;
			}
		}
		return null;
	},

	// whether book is present or not

	// adding book to the library
	addBook: function (id, title, author) {
		if (!this.isRegisterd(id)) {
			//if not registered then add the object in the library

			this.library.push(new Book(id, title, author));
			console.log("book got registered");
		} else {
			console.log("book already registered in the system");
		}
	},

	// borrowing book

	borrowBook: function (id) {
		const book = this.isRegisterd(id);

		if (!book) {
			console.error(`book id ${id} is invalid`);
			return;
		}

		if (book.isBorrowed) {
			//if already borrowed
			console.log(`book with id ${book.id} currently not available  `);
		} else {
			book.isBorrowed = true;
			console.log(`book with id ${book.id} has been borrowed`);
		}
	},

	// retrun book
	returnBook: function (id) {
		const book = this.isRegisterd(id);

		if (!book) {
			console.error(`book id ${id} is invalid`);
			return;
		}
		book.isBorrowed = false;
	},

	// available books
	bookAvailable: function () {
		console.log("================BOOKS AVAILABLE===================");
		for (let b of this.library) {
			if (!b.isBorrowed) {
				console.log(`book title - ${b.title} and author - ${b.author}`);
			}
		}
	},

	//searching for a book

	searchBook: function (title) {
		for (let b of this.library) {
			if (b.title === title) {
				console.log("Book found ");
				return b;
			}
		}
		console.error("Book not found");
		return null;
	},

	// menu for LMS
	menu: function () {
		let choice,
			exit = false;

		do {
			choice = +prompt("enter 1. for adding book \n 2. for borrowing book \n 3. for returning book \n 4. for list of available books \n 5. searching for particular book \n 6 for exit for menu");

			switch (choice) {
				case 1:
					this.addBook(prompt("enter id"), prompt("enter title of the book"), prompt("enter author of the book"));
					break;
				case 2:
					this.borrowBook(prompt("Enter the id of book you want to borrow"));

					break;
				case 3:
					this.returnBook(prompt("Enter the id of book you are returning"));
					break;
				case 4:
					this.bookAvailable();
					break;
				case 5:
					console.log(this.searchBook(prompt("enter the title to search for a book")));
					break;
				case 6:
					exit = true;
					break;
				default:
					console.log("please enter from 1 to 6 only");
			}
		} while (!exit);
	},
};

LMS.menu();
