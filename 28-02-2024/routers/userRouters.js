const express = require("express");
const userRouter = express.Router();

const { signInUser } = require("../controllers/user_auth");

userRouter.post("/", signInUser);

module.exports = userRouter;
