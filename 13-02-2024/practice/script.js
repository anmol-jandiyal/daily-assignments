/* let arr1 = [{ p1: "12", p2: "buy" }];

let arr2 = [...arr1];

arr1[0].p1 = "3444";
console.log(arr1, arr2);

// deep cloning is not possible with spread operator 
 */

//////////////////////////////////////////////////////
//this keyword

/* const obj1 = {
	uName: "Anmol",
	getName: function () {
		return this.uName;
	},
};

const obj2 = {
	uName: "Manish",
	getName: function () {
		return this.uName;
	},
};

console.log(obj1.getName());
console.log(obj2.getName());
 */
// console.log(this); //return window object

////////////////////////////////////
//binding

/* function getName() {
	return this.uName;
}

console.log(getName());
console.log(getName); //return the reference of getName fucniton

const obj1 = {
	uName: "anmol",
	getObjName: getName,
};

const obj2 = {
	uName: "manish",
	getObjName: getName,
};

console.log(obj1.getObjName(), obj2.getObjName());

//this will refernece to the object based upon the context from where it is called
//globally this return window object or the target element in case of eveent trigger
//in above case the binding is implicit binding
 */

/* /////////////////////////////////////////////////
//explict binding

function getName() {
	return this.uName;
}
function setName(newName) {
	this.uName = newName;
}

const obj1 = {
	uName: "anmol",
};

const obj2 = {
	uName: "manish",
};

setName.call(obj1, "my new name is anmol");
let output = getName.call(obj1); //we have to call the getName along with the value of "this "  keyword
//first arg = reference to the object but all other parameters are the parameters need to be passed  on

console.log(output);

/////////////////////////////////////////////
console.log(getName.bind(obj1)); //return a function bounded t oobj1

const bindedFnGetFn = getName.bind(obj1);
console.log(bindedFnGetFn()); */

/////////////////////////////////////////////////
/* 
function greet(greeting) {
	return greeting + this.uName;
}

const obj = {
	uName: "anmol",
};

let helloGreet = greet.bind(obj, "hello "); //return a fun binded with obj and pass the first argument

let morningGreet = greet.bind(obj, "morning ");

console.log(helloGreet(), morningGreet());
 */

//////////////////////////////////////////////////////
//callbacks
/* 
function fn() {
	console.log("fun function");
}

function useLess(funn) {
	funn();
}

useLess(fn); */

/* let arr = [1, 2, 3, 4, 5];

function squareArr(arr) {
	const sq = [];

	for (let x of arr) {
		sq.push(x * x);
	}
	return sq;
}

console.log(squareArr(arr));
 */
/* 
const square = (num) => num * num;
const cube = (num) => num * num * num;
const double = (num) => 2 * num;

let arr = [1, 2, 3, 4, 5];

function tranform(arr, transformer) {
	let transformedArr = [];

	for (let num of arr) {
		transformedArr.push(transformer(num));
	}
	return transformedArr;
}

console.log(tranform(arr, square));
console.log(tranform(arr, cube));
console.log(tranform(arr, double));
 */

function greeter(greeting) {
	return function (uName) {
		return greeting + uName;
	};
}

const hello = greeter("hello");
console.log(hello("anmol"));
