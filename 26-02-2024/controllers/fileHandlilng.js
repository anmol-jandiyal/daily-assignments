const fs = require("fs");

function fetchList() {
	let tasks;

	try {
		tasks = JSON.parse(fs.readFileSync("./taskFile.txt", "utf-8"));
	} catch (error) {
		console.log(error);
		tasks = [];
	}
	return tasks;
}

function updateFile(dataList) {
	const stringData = JSON.stringify(dataList);

	fs.writeFile("./taskFile.txt", stringData, (error) => {
		if (error) {
			console.log("ERROR ENCOUNTERED WHILE READING THE FILE");
		}
	});
}

module.exports = { updateFile, fetchList };
