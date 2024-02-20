const userBtn = document.querySelector(".user-btn");
const todosBtn = document.querySelector(".todos-btn");
const postBtn = document.querySelector(".post-btn");

const outputContainer = document.querySelector("#output-container");

const flag = {
	flagPost: 1,
	flagTodo: 1,
	flagUser: 1,
	updateFlag: function (flagKey) {
		this.flagPost = 1;
		this.flagTodo = 1;
		this.flagUser = 1;

		//will change the flag so that re rendering can be prevented
		this[flagKey] = 0;
	},
	//update flag is used to prevent rerendering
};

/* ----------------------------------------- */
//creates new card based upon the data present in obj and append that to outputContainer element
/* ----------------------------------------- */
function createUIElement(obj) {
	const card = document.createElement("div");
	card.classList.add("card");

	for (key in obj) {
		const innerEle = document.createElement("div");

		const stringData = typeof obj[key] === "object" ? JSON.stringify(obj[key]) : obj[key];

		innerEle.innerHTML = ` <strong>${key} : </strong> ${stringData}`;

		card.appendChild(innerEle);
	}
	outputContainer.appendChild(card);
}

/* ----------------------------------------- */
//used to  append each data object in the card
/* ----------------------------------------- */
function render(data) {
	outputContainer.innerHTML = "";

	for (dEle of data) {
		createUIElement(dEle);
	}
}

/* ----------------------------------------- */
// using promise then construct
/* ----------------------------------------- */
function displayDataUsingPromise(url) {
	const response = fetch(url);

	response
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			render(data);
		})
		.catch((error) => {
			console.log("encountered error", error);
		});
}

/* ----------------------------------------- */
// using async await construct
/* ----------------------------------------- */
async function displayDataUsingAsyncAwait(url) {
	let data = null;

	try {
		const response = await fetch(url);

		data = await response.json();
	} catch (error) {
		console.log(error);
	}

	//will call render if data have some value
	if (data) {
		render(data);
	}
}

userBtn.addEventListener("click", () => {
	if (flag.flagUser) {
		displayDataUsingAsyncAwait("https://jsonplaceholder.typicode.com/users");
		flag.updateFlag("flagUser");
	}
});
todosBtn.addEventListener("click", () => {
	if (flag.flagTodo) {
		displayDataUsingPromise("https://jsonplaceholder.typicode.com/todos");
		flag.updateFlag("flagTodo");
	}
});

postBtn.addEventListener("click", () => {
	if (flag.flagPost) {
		displayDataUsingPromise("https://jsonplaceholder.typicode.com/posts");
		flag.updateFlag("flagPost");
	}
});
