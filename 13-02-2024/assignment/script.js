//task 1
const st1 = {
	stName: "Anmol",
	age: 22,
	subjects: [
		{ subName: "webDevelopement", grade: 80 },
		{ subName: "computer networks", grade: 90 },
		{ subName: "theory of computation", grade: 88 },
		{ subName: "compiler design", grade: 56 },
		{ subName: "java", grade: 96 },
		{ subName: "basic chemistry", grade: 30 },
	],

	gradeArray: function () {
		return this.subjects.map((sub) => sub.grade);

		//this fucntion will return the array of grades stored as a property in the subject array objects
	},

	subjectNameArray: function () {
		return this.subjects.map((sub) => sub.subName);

		//this fucntion will return the array of subject name stored as a property in the subject array objects
	},
};

// ================================================
//task 2  bind, call and apply

function displayInfo() {
	console.log(`Name: ${this.stName} \n Age: ${this.age}\n Grade: ${this.gradeArray()}`);
}

const boundDisplayInfo = displayInfo.bind(st1);
boundDisplayInfo();

// ---------------------------------------------------------------------

function newDisplayInfo(...parameter) {
	let message = "";

	for (let arg of parameter) {
		message += arg + "\n";
	}

	console.log(`${message}\n Name: ${this.stName} \n Age: ${this.age}\n Grade: ${this.gradeArray()}`);
}
/* 
//there may be multiple arguments as a message, so  we use rest operator to create an array of parameter
// loop over the parameter array and concatinate each message into one message
 */

console.log("\n\n\n===================================");
newDisplayInfo.call(st1, "Hi! welcome to student info function (using call function)", "message 1");

console.log("\n\n\n===================================");
newDisplayInfo.apply(st1, ["Hi! student information platform (using apply function)", "message 2", "message 3"]);

/* 
//apply will not pass the array itself as a parameter but it will separately pass each arrguements
// eg: fun(p1,p2){}

//  fun.apply(obj, [arg1 , arg2 ]);
// internally it wll call the "fun" function as   =>  fun(arg1, arg2)
 */

// ======================================================
//task 3 : call back

function upperCase(subject) {
	return subject.toUpperCase();
}

function processSubject(subjects, processor) {
	console.log("\n\n\n===================================");
	console.log("PROCESSING THE SUBJECT ARRAY");

	for (let sub of subjects) {
		console.log(processor(sub));
	}
}

processSubject(st1.subjectNameArray(), upperCase);

//=======================================================
//task 4 map and filter

function doubleGrade() {
	return this.gradeArray().map((val) => 2 * val);
} //gradeArray () will return the array of subjects  grades

console.log("\n\n\n===================================");

console.log("\n Modified Grade array = ", doubleGrade.call(st1));
//calling the doubleGrade()  fun and also binding "st1" object with it

console.log("\n Original Grade array = ", st1.gradeArray());

// -------------------------------------------------------
function passingSubjectsFunction() {
	console.log("\n\n\n===================================");
	console.log("Passed Subjects are");

	const passedSubjects = this.subjects.filter((sub) => sub.grade >= 70);

	for (let sub of passedSubjects) {
		console.log(`Subject :  ${sub.subName} Grade : ${sub.grade}`);
	}
}

passingSubjectsFunction.call(st1);
