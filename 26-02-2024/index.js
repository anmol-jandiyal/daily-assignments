const { router } = require("./routers/crudRouters");

const express = require("express");
const server = express();
server.use(express.json());

//Create task ------------------
server.use("/tasks", router);

//////////////////////////////////////////////
server.listen(8080, () => {
	console.log("server running");
});
