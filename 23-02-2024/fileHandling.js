import fs from "fs";

let data;
let students;

try {
	data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
	students = data.students;
} catch (error) {
	// if data.json file is empty
	console.log("PARSING ERROR");
	students = [];
}

function getList() {
	return students;
}

function getStudent(id) {
	const data = students.filter((st) => {
		return st.id === id;
	});

	return data.length === 0 ? false : data[0];
}

function updateFile(fileName, data) {
	fs.writeFile(fileName, data, (error) => {
		if (error) {
			console.log("ERROR ENOUNTERD WHILE WRITING THE DATA TO THE FILE :" + "data.json");
		}
	});
}

function addStudent(data) {
	students.push(data);

	const jsonData = JSON.stringify({ students: students });
	updateFile("data.json", jsonData);
}

function deleteStudent(id) {
	students = students.filter((st) => {
		return st.id !== id;
	});
	const jsonData = JSON.stringify({ students: students });
	updateFile("data.json", jsonData);
}

function updateDetails(newDetails) {
	//we cannot change the id of student

	for (let st of students) {
		if (st.id === newDetails.id) {
			st.name = newDetails.name ?? st.name;
			st.college = newDetails.college ?? st.college;
			st.semester = newDetails.semester ?? st.semester;
			st.dob = newDetails.dob ?? st.dob;

			break;
		}
	}
	const jsonData = JSON.stringify({ students: students });
	updateFile("data.json", jsonData);
}

export default { getList, getStudent, addStudent, deleteStudent, updateDetails };
