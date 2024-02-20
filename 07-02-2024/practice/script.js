// const items = ["djioaf", "jifaop", 23];

// console.log(items);

// console.log(items[3]);
// console.log((items[3] = 22));

// console.log(items[-1]);

// // items =ijsdiosfj;  => not possible as items is a const variable

// // [push pop]
// items.push("cake");
// console.log(items, items.length);

// items.unshift("toffee");
// console.log(items, items.length);

// items.pop();
// items.shift();

// console.log(items);

// // lopping over the array
// console.log("\n\n========================\n\n for loop ");

// items.forEach((ele) => {
// 	console.log(ele);
// });

// console.log("for loop");
// for (i = 0; i < items.length; i++) {
// 	console.log(items[i]);
// }

// console.log("for of  loop");
// for (let ele of items) {
// 	console.log(ele);
// }

// /* difference between for of and for loop is that "for "loop we required to keep track of index
//         also "for of " only used with arrays
// */

// /* Technically, because arrays are objects, it is also possible to use for..in: */

// // accessing last index

// /*
//         some language allow us to access last index using -1 index value like arr[-1]
//         but in js it will give us "undefined"
// */

// const names = ["anmol", "aman", "manish", "nitin", "anuj"];

// console.log("\n\n========================\n\n last index ");
// console.log(names[-1]);
// console.log(names[names.length - 1]);
// console.log(names.at(-1));

// // maximum posible index of the array  "index is 32 bit indexed"
// /* names[4294967294] = "last name";
// console.log(names);
// names[4294967295] = "ijfaios";
// console.log(names);
//  */

// console.log("\n\n========================\n\n using arrays as object ");
// names.obj = "key wala index";
// names[8] = "last name";
// console.log(names);

// for (let ele of names) {
// 	console.log(ele);
// }
// // index wale element log ho jaenge pr jo be key index nhi hai like "obj" we will not print that element

// /-------------------------------------------/ functions

fun1(); //can acces normal function
// fun2(); //cannot access fun2 () before initializtion

// fun3(); //fun3 is not a function becuse initially fun3 contains undefined value

fun4();
function fun1() {
	console.log("hello");
}

let fun2 = function () {
	console.log("fun2");
};

var fun3 = function () {
	console.log("fun3");
};

// var fun4 = () => {
// 	console.log("arrow function");
// };

// function by default returns undefined  but if we want to return some value we can use  return ;
