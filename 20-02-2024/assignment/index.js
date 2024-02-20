const { read } = require("fs");
const readline = require("readline-sync");
const fileHandling = require("./fileSystemModule");
let flag = true;

console.log("\n///////////////////////////////////////");
console.log("creat directory");
fileHandling.createDirectory(readline.question("Enter  directory Name"));

console.log("\n///////////////////////////////////////");
console.log("List");

fileHandling.listFile(readline.question("Enter directory"));

console.log("\n///////////////////////////////////////");
console.log("write");
fileHandling.write(readline.question("Enter File name"), readline.question("Enter Data"));

console.log("\n///////////////////////////////////////");
console.log("read");
fileHandling.read(readline.question("Enter File Name"));
