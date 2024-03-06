const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routers/userRouters");

const server = express();
const PORT = 8080;

server.use(express.json());

server.use("/auth", userRouter);

const url = "mongodb://localhost:27017/mydb";
mongoose
	.connect(url)
	.then(() => {
		console.log("successfully connected to db");
		server.listen(PORT, () => {
			console.log("server started");
		});
	})
	.catch((err) => {
		console.log(err);
	});
