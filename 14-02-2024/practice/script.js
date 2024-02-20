/* function loadScript(src, callBack) {
	const scriptEle = document.createElement("script");
	scriptEle.src = src;

	scriptEle.addEventListener("load", callBack);

	document.querySelector("body").prepend(scriptEle);
}

loadScript("script2.js", function () {
	script2Fun();
}); */

/* 
console.log("adifjaop");
console.log("adifjaop");
console.log("adifjaop");
console.log("adifjaop");
console.log("adifjaop");
console.log("adifjaop");
console.log("adifjaop");
console.log("adifjaop");
console.log("adifjaop");
console.log("adifjaop");
console.log("adifjaop");
console.log("adifjaop");
console.log("adifjaop");
console.log("adifjaop");
console.log("adifjaop");
 */

//async programming
/* 
setTimeout(function hello() {
	console.log("hello");
}, 1000);
setTimeout(function hello() {
	console.log("two");
}, 1000);
setTimeout(function hello() {
	console.log("three");
}, 1000);
setTimeout(function hello() {
	console.log("four");
}, 1000);
setTimeout(function hello() {
	console.log("five");
}, 1000);
setTimeout(function hello() {
	console.log("six");
}, 1000);
setTimeout(function hello() {
	console.log("seven");
}, 1000);

// hello(); */

/* setTimeout(() => {
	console.log("one");

	setTimeout(() => {
		console.log("two");

		setTimeout(() => {
			console.log("five");
		}, 4000);
	}, 5000);
	console.log("three");
}, 4000);
 */

/* function fun(n) {
	if (n === 0) return 0;
	if (n === 1) {
		return 1;
	}

	return fun(n - 1) + fun(n - 2);
} */

// console.log(fun(50));

// Promise

/* function promise(a) {
	return new Promise((resolve, reject) => {
		if (a === 10) {
			resolve(true);
		}
		reject(false);
	});
	// .then(() => {
	// 	console.log("hello");
	// })
	// .catch((e) => {
	// 	console.log(e);
	// 	console.log("error");
	// });
}

*/
/* function fibo(n) {
	if (n === 1 || n === 0) return n;

	return fibo(n - 1) + fibo(n - 2);
}

const pr = new Promise((resolve, reject) => {
	console.log("idfjjadsfj");

	setTimeout(() => {
		resolve(fibo(40));
	});
});



pr.then((result) => {
	console.log(result);
});
// the function in the promise() will return either  error or result passed as an argument in resolve() fun

console.log("two");
 */
/* 
let a = 80;

function errorFun(e) {
	console.log(e);
	console.log("error happend");
}
function resolved(response) {
	console.log(response);
}

const pr = new Promise((resolve, reject) => {
	if (a === 10) resolve(a);
	else reject(new Error("a does not have value 10"));
});

// pr.then(resolved, errorFun).finally(() => {
// 	console.log("in the finally block");
// }); //then is a fun that take two arguments (both are call back function)
//first one is - function that is called when promise is resolved and second one in fun that is called when promise is rejected

pr.finally(() => {
	console.log("in the finally block");
}).then(resolved, errorFun);
//finally block run first

//resolve and reject are in-built functions that are called by programmer based upon whether function execute successfully or not
 */

////////////////////////////////////////////////////////////

function loadScript(src) {
	return new Promise((resolve, reject) => {
		const scriptEle = document.createElement("script");

		scriptEle.src = src;

		scriptEle.onload = () => resolve("File has been loaded");
		scriptEle.onerror = () => reject(new Error("file not found"));

		document.querySelector("body").appendChild(scriptEle);
	});
}
let pr = loadScript("script4.js");

let newPr = pr
	.then(() => {
		script2Fun();
		return 343;
	})
	.catch((e) => {
		console.log(e);
	});

//then()  fun again return promise

console.log(newPr);

console.log("end part of code");
