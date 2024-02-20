const fs = require("fs");
const readline = require("readline-sync");

function listFile(dir) {
	// dir can be any thing so in order to check if the particular string is a file or not we need to append that with dir
	fs.promises
		.readdir(dir, "utf-8")
		.then((data) => {
			console.log("-------------------------------------------------");
			console.log("list of files present in the given directory are\n");
			data.forEach((f) => {
				if (fs.statSync(dir + "/" + f).isFile()) {
					//checking if the string is a file or not
					console.log(f);
				}
			});
			console.log("-------------------------------------------------");
		})
		.catch((error) => {
			console.log("no such directory found");
		});
}

function createDirectory(dirName) {
	const newDirPath = __dirname + "/" + dirName; // __dirname return the current dirctory

	fs.promises
		.mkdir(newDirPath)
		.then((data) => {
			//data contains nothing
			console.log("-------------------------------------------------");
			console.log("Successful creation of directory");
			console.log("-------------------------------------------------");
		})
		.catch((error) => {
			console.log("-------------------------------------------------");
			console.log("Same folder already exist in directory = " + newDirPath);
			console.log("Please use different name");
			console.log("-------------------------------------------------");
		});
	// fs.mkdir(newDirPath, (error) => {
	// 	if (error) console.log("SAME DIRECTORY ALREADY EXIST");
	// 	else {
	// 		console.log("-------------------------------------------------");
	// 		console.log("new folder created");
	// 		console.log("-------------------------------------------------");
	// 	}
	// });
}

function read(fileName) {
	fs.promises
		.readFile(fileName, "utf-8")
		.then((data) => {
			console.log("-------------------------------------------------");
			console.log("Data of given file - ");
			console.log("-------------------------------------------------");

			console.log(data);
		})
		.catch((error) => {
			console.log("-------------------------------------------------");
			console.error("file does not found or you are reading the directory");
			console.log("Error message: " + error.message);
			console.log("-------------------------------------------------");
		});
}

async function write(fileName, data) {
	try {
		const d = await fs.promises.writeFile(fileName, data);
		console.log("Data successfully written to the file");
	} catch (error) {
		console.log("Error Message : " + error.message);
	}
}

module.exports = { read: read, write: write, createDirectory: createDirectory, listFile: listFile };
