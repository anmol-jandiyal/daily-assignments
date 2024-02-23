//fetching the data present

import files from "./fileHandling.js";
import express from "express";
const server = express();
server.use(express.json());

//------------------------------------------------------------------------------
//middleware validator
function postValidator(req, res, next) {
	const data = req.body;

	if (data.id && !isNaN(+data.id) && data.name && data.college && data.semester && data.dob) {
		if (!files.getStudent(data.id)) {
			//if the student not present then only appending happens
			next();
		} else {
			res.send("student with same id already present");
		}
	} else {
		res.send("DATA INCOMPLETE - please send data in the json with the fields : ID, NAME, COLLEGE,SEMESTER,DOB also ensure id must be a numerical string");
	}
}
function isPresentValidator(req, res, next) {
	const id = req.params.id ?? req.body.id;

	if (!id) {
		res.send("ID NOT FOUND (PLEASE ENSURE ID OF STUDENT IS PASSED)");
		return;
	}

	if (files.getStudent(id)) {
		next();
	} else {
		res.send("SEARCHED STUDENT ID NOT FOUND ");
	}
}

///////////////////////////////////////////////////////////////////////////////////
//get request
server.get("/students", (req, res) => {
	res.json(files.getList());
});
server.get("/students/:id", (req, res) => {
	const id = req.params.id;
	const userData = files.getStudent(id);

	res.send(userData ? userData : "NOT FOUND");
});

// -----------------------------------------------------------------------------------
//post requests
server.post("/student", postValidator, (req, res) => {
	files.addStudent(req.body);
	res.send("SUCCESSFUL ADDITION OF STUDENT");
});

// -----------------------------------------------------------------------------------
//updating the data of given id
server.put("/student", isPresentValidator, (req, res) => {
	files.updateDetails(req.body);
	res.send(`DETAILS UPDATED FOR STUDENT WITH ID: ${req.body.id} `);
});

// -----------------------------------------------------------------------------------
//removing the particular data element
server.delete("/students/:id", isPresentValidator, (req, res) => {
	const id = req.params.id;

	files.deleteStudent(req.params.id);
	res.send(`SUCCESS ->  STUDENT WITH ID - ${id} DELETED`);
});

// -----------------------------------------------------------------------------------
server.listen(8080, () => {
	console.log("server started");
});
