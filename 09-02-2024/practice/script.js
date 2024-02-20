/* const obj = {
	name: "anmol",
	location: {
		hn: "610",
		street: "5/a",
		state: "jammu and kashmir",
	},
};

console.log(obj);

const obj2 = obj;

console.log(obj, obj2, obj === obj2, obj == obj2);

// let obj3;cannot convert undefined to object so at time of declaration we should assign object t othe variable

const obj3 = { lastName: "jandiyal" };
Object.assign(obj3, obj2);

console.log(obj3, obj2);

obj3.name = "manish";
console.log(obj2.name, obj3.name);
console.log(obj3 === obj2, obj3 == obj2);

// const obj4 =obj2.
 */

/* const nodeList = document.querySelectorAll("h1");
 */

//we  cannot directly use nodeList so first convert it to array

/* const arrayList = Array.from(nodeList);
console.log(nodeList, arrayList);
 */
// ////////////////////////////////////////////////////////
//creating elements

const div = document.querySelector("#container");

/* console.log(div);
console.log(div.innerHTML); //return a string containing all html present in div

div.innerHTML = "<p>paragraph</p>";

console.log(div.innerHTML); */

///////////////////////////////////////////////
// const list = document.querySelector("#list");
/* console.log(list);

const liEle = document.createElement("li");
console.log(liEle);
liEle.textContent = "item 1";
list.appendChild(liEle);

//createElement() creates the live elemnts
list.appendChild(liEle);
 */

/* function createLiElement(text) {
	const li = document.createElement("li");
	li.textContent = text;

	return li;
}
const textList = ["javascript", "react", "nodejs"];

for (const text of textList) {
	list.appendChild(createLiElement(text));
}
 */

///////////////////////////////////////////////////////
//event driven programming
const button = document.querySelector("button");
const button2 = document.querySelector("#button2");

function callMe() {
	console.log("calling the fuction");
}

function callMe2() {
	console.log("calling fun 2");
}
/* button.onclick = callMe2;

button2.onclick = callMe;
button2.onclick = callMe2;
 */

// adding event listener

function hello() {
	console.log("hello");
}
function bye() {
	console.log("bye bye");
}
button.addEventListener("click", hello);
button.addEventListener("click", bye);
//execution of fun is in the same sequence in which we add event listener
