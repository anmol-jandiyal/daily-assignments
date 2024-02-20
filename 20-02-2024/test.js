/* const fs = require("fs");

fs.writeFileSync("sample.txt", "hello"); //creats a new file if not present and insert the data to that file  //file ka content overwrite hoga

// fs.writeFileSync("sample1.txt", "bye");

const fileInfo = fs.statSync("sample.txt");
console.log(fileInfo);

const message = "hello brother";

fs.appendFileSync("sample1.txt", message);

fs.mkdirSync("./test/data", { recursive: true });
 */

const fs = require("fs");

const userInfo = {
	uName: "anmol",
	id: 323,
	address: "abc",
};

const product = {
	pName: "car",
	price: 31222,
	currency: "$",
};

/* function log(fileName, message) {
	fs.appendFileSync(fileName, message);
}

const fileName = "log.txt";
const message = `${new Date()}  ${userInfo.uName.toUpperCase()} is trying to access  ${JSON.stringify(product)} \n `;

log(fileName, message);

const fileData = fs.readFileSync("log.txt", "utf-8");

console.log(fileData); //returns a buffer data  //so place 2nd argument "utf-8"
 */

fs.writeFile("sample.txt", "hello yo yo", function () {
	console.log("data have been written to the file"); //will execute once data inserted to file
});
console.log("above fun is non blocking i.e async");

const fileData = fs.readFile("log.txt", "utf-8", (error, data) => {
	console.log(error);
	console.log(data);
	console.log(fileData);
}); //utf-8 is given in order to perform encoding

console.log(fileData); //will contain undefined as this statement runs first
//fs.readFile() doesnot return anything

//async functions deos not take any call back
