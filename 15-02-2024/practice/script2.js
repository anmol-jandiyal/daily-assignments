/* async function fun1() {
	try {
		const value = await new Promise((resolve, reject) => {
			// setTimeout(() => {
			// 	resolve(3333);
			// });
			reject("Error");
		});
	} catch (error) {
		console.log(error);
	}

	// for (let i = 0; i < value; i++) {
	// 	console.log("fun 1");
	// }
}
async function fun2() {
	for (let i = 0; i < 1000; i++) {
		console.log("fun 2");
	}
}

fun1();
fun2(); */
/* 
(() => {
	console.log("hello");
})(); */

async function errorFun() {
	await fetch("http://no-such-url"); //no such url exist ==> we get an errors // this is just like throw new Error();
}

// console.log(errorFun());
errorFun().catch(() => {
	console.log("rejected promise");
});
