/* 
//stack memory adn heap memory

any variable created either stored in stack or heap

stack memory stores "primitive variables"
heap stores arrays, object, functions

stack pe array or object or functions ka memory address store hoga heap wala or os stack memory ko vaariable point kr raha hoga

eg: heap memory 0x232faff =  object {}

        stack memory 0x222222= 0x232faff

        var obj= 0x222222;

*/
/* 
let a = 10;
let b = a;
a = 20;
console.log(a, b); //20 10 */
/* 
let arr1 = [10, 20];
let arr2 = arr1;

arr1[0] = 1000;
console.log(arr1); // 1000 20
console.log(arr2); //1000 20

// reason = both array points to same memory location
 */

/* let obj1 = { name: "anmol " };
let obj2 = obj2;
console.log(obj1, obj2);
 */

/* // //////////////////////////////////////
//slice(begin,no. of elements)

let arr1 = [10, 2, 3, 1, 3, 4];
let arr2 = arr1.slice(0, 3); //returns new array with elements as specified
console.log(arr1, arr2);

// let arr3 = arr1.splice(0, arr1.length);
let arr3 = arr1.splice(); //returns new array with full length
console.log(arr3);

/////////////////////////////////////
//concat(arr3)
let arr4 = arr1.concat(arr2);
console.log(arr4);
 */
// //////////////////////////////////////////////////
//destructuring

/* let arr1 = [12, 100, 22, 22, 22, 11, 44, 11, 33];
let [a, b] = arr1; //only 12 and 100 are assigned to a and b repectively but all other element got dropped.

let arr4 = [11, 22];
let [c, d, e] = arr4; //e= undefined
console.log(a, b, c, d, e);

let [f, g, ...rest] = arr1; //f =12, g = 100 and rest = rest of all elements

console.log(f, g, rest);
 */

//copying arrray using rest operator
/* 
let a1 = [12, 3, 42, 3, 4, 3];
let [...a2] = a1;

a2[0] = "1111";
console.log(a1, a2);

let a3 = [...a1]; //spread operator

console.log(a3);
 */

///////////////////////////////////////////////
//object destructuring

/* let obj = {
	uName: "anmol",
	cClass: "8th sem",
	age: 22,
};

let { n, c, a } = obj; //we have to give same name to variable same as property names
console.log(n, c, a);

let { uName } = obj;
console.log(uName);

let { uName: naam } = obj; //will copy the value of name property in "naam"

console.log(naam); */

//copying the objects
/* let obj = {
	uName: "anmol",
	cClass: "8th sem",
	age: 22,
};
let obj2 = { ...obj };
console.log(obj2 === obj);
 */

// ////////////////////////
//vararg functions
/* 
function addPrefix(pfx, ...words) {
	let prefixWord = [];

	for (let word of words) {
		prefixWord.push(pfx + word);
	}
	return prefixWord;
}

console.log(addPrefix("un", "ambiguous", "wanted", "registered"));
 */

/////////////////////////////////////////////
//local storage

console.log(window.localStorage);

console.log(Object.keys(localStorage));

localStorage.setItem("user", JSON.stringify({ name: "anmol", class: "8th" }));

Object.keys(localStorage).forEach((ele) => {
	console.log(ele);
	console.log(JSON.parse(localStorage.getItem(ele)));
});

// localStorage.clear();
console.log(localStorage);
