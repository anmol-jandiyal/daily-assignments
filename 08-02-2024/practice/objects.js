// // obj stores data in the key value pair

// const obj = {
// 	name: "anmol",
// 	age: 22,
// 	email: "anmoljandiyal",
// 	// email: "jdoifj", this will cnange the value of "email" to "jdifj"
// };

// // note key name must be string
// //js automatically convert the key into string

// console.log(obj);
// console.log(obj.name);
// console.log(obj["name"]);

// //  declaring obj
// const ob1 = new Object();
// const ob2 = {};

// // accessing each element in object
// console.log("=====================================");
// for (let key in obj) {
// 	// will only print keys
// 	console.log(key, obj[key]);

// 	// console.log(obj.key);  undefined
// 	// because it search for "key" property in object
// }

/* 
const ob= {
		name:"anmol", key:"its a key property"
		};

	for( let key in ob){
		console.log(obj.key)  // its a key property   its a key propeerty
	}
*/

// methods in objects
const obj = {
	name: "anmol",
	age: 14,
	email: "anmoljandiyal12@gmail.com",
	posts: ["p1", "p2"],
	getPosts: function () {
		console.log("posts");
		return this.posts;
	},
};

console.log(obj.getPosts());

// constructor function   -> depriciated
//if we want to create object of same blue print

/* 
        constructors 
        // starts with capital letter 
        and does not have any return statement

        we use new before calling it
*/

function Student(name, age) {
	this.name = name;
	this.age = age;
	this.getName = function () {
		return this.name;
	};
}

const s1 = new Student("anmol", 13);
console.log(s1);

// ===================checknig for propety in object

if (s1.pro === undefined) {
	console.log("property doesnot exist");
}

console.log("pro" in s1);
