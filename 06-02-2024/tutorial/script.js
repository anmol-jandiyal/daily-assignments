/* try {
	console.log("hello");
	adjfoiasf();
	console.log("bye");
} catch (err) {
	console.log(err);
	console.log();
}
// javascript will automatically generate errror variable and pass it to catch block
 */

/* try {
	setTimeout(function () {
		console.log("hello");
		difjasopfsd;
	}, 5000);
} catch (err) {
	console.log("bye");
}
console.log("bro");
// will not able to catch error like this 
//to catch error in asynchronous code we need to but try catch in that part only
//like in this case place try catch inside the callback function
*/

/* setTimeout(function () {
	console.log("hello");

	try {
		alkfjaop;
	} catch (err) {
		console.log(err);
		console.log(err.name);
		console.log(err.message);
		console.log(err.stack);
	}
}, 3000);
 */

// json to object

/* const jsonObj = '{"age":43 , "userName" : "anmol"}';

console.log(jsonObj);

const obj = JSON.parse(jsonObj);

console.log(obj);
 */

/* const jsonObj = '{"ag :43 , "userName" : "anmol"}';

console.log(jsonObj);

try {
	const obj = JSON.parse(jsonObj);

	console.log(obj);
} catch (err) {
	console.log(err);
	console.log("check ur json string");
}
 */

// if we want to throw our own error based upon some condition

// eg:
// console.log(33 / 0);// return infinity but we want to throw error in this case
// throw <error obj>  error obj can be anything => primitive or obj
//but recommended to create obj with message and name properties

/* const errInfinity = { name: "infinity error", message: "division by 0" };

try {
	if (33 / 0 === Infinity) {
		throw errInfinity;
	} else {
		console.log("correct expression");
	}
} catch (err) {
	console.log(err);
} */

//we can also use SyntaxError(), ReferenceError() , Error() or TypeError() constructor to create error object
/* 
const errInfinity = new Error("division by 0");
try {
	if (33 / 0 === Infinity) throw errInfinity;
} catch (err) {
	console.log(err);
} */

// handling multiple catch

const jObj = '{"age": 44, "name":"anmol"}';

function errorChecking() {
	try {
		afjfp;
		obj = JSON.parse(jObj);
		if (!obj.name) {
			throw new SyntaxError("no name found");
		}
	} catch (err) {
		if (err instanceof SyntaxError) {
			console.log("Json error: " + err);
		} else {
			throw err;
		}
	}
}

try {
	errorChecking();
} catch (err) {
	console.log(err);
}

// ===================================
/* 
const userAdmin = "admin";
const password = "232";

if (userAdmin === "admin" && password === "232") {
	console.log("logged in");
}

console.log(23 && 233); //evaluate both expression if first expression is true
//so the o/p returned by above expression is 233
 */
