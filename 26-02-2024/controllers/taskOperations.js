const taskModel = ["id", "title", "description"];
const files = require("./fileHandlilng");

const taskList = files.fetchList();

function createValidator(req, res, next) {
	const body = req.body;

	//checking if req has valid fields or not
	for (const fields of taskModel) {
		if (!body.hasOwnProperty(fields)) {
			return res.status(400).send("ERROR: INVALID FIELDS");
		}
	}

	const id = body.id;
	const taskIndex = taskList.findIndex((t) => t.id === id);

	if (taskIndex !== -1) {
		return res.send("Error: task with same ID already present");
	}

	next();
}

function replaceValidator(req, res, next) {
	const body = req.body;

	if (body.hasOwnProperty("title") && body.hasOwnProperty("description")) next();
	else {
		return res.status(400).send("ERROR: INVALID FIELDS");
	}
}

///////////////////////////////////////////////////////////////
//<---------------------CREATE REQUEST------------------->
const createTask = function (req, res) {
	const taskData = req.body;
	taskData.completed = false;

	//---------------append to file------------------------
	taskList.push(taskData);
	files.updateFile(taskList);

	return res.status(201).send(`Task has been created with id ${taskData.id}`);
};

//<---------------------Read REQUEST------------------->
const getAllTasks = function (req, res) {
	res.status(200).send(taskList);
};

const getTask = function (req, res) {
	const id = req.params.id;
	const task = taskList.find((t) => t.id === id);

	if (task) {
		return res.status(200).send(task);
	}
	return res.status(404).send("Error: Task Not Found");
};

//<---------------------Update REQUEST------------------->
const replaceTask = function (req, res) {
	const id = req.params.id;
	const taskIndex = taskList.findIndex((t) => t.id === id);

	if (taskIndex === -1) {
		return res.status(404).send(`Error: task with ID = ${id}  not Found`);
	}

	taskList.splice(taskIndex, 1, { ...req.body, completed: false, id: id });

	files.updateFile(taskList);
	res.status(200).send(taskList[taskIndex]);
};

const updateTask = function (req, res) {
	const id = req.params.id;

	for (const t of taskList) {
		if (t.id === id) {
			t.completed = true;

			files.updateFile(taskList);
			return res.status(202).send(`Task with id ${id} completed`);
		}
	}
	return res.status(404).send(`Error : task with id : ${id} not found`);
};

//<---------------------Delete REQUEST------------------->
const deleteTask = function (req, res) {
	const id = req.params.id;
	const taskIndex = taskList.findIndex((t) => t.id === id);

	if (taskIndex === -1) return res.status(404).send(`Error : task with id : ${id} not found`);

	taskList.splice(taskIndex, 1);

	files.updateFile(taskList);
	return res.status(202).send(`Task with ID ${id} deleted successfully`);
};

module.exports = {
	getAllTasks,
	getTask,
	replaceTask,
	updateTask,
	deleteTask,
	createValidator,
	createTask,
	replaceValidator,
};
