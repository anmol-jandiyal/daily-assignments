const { default: mongoose } = require("mongoose");
const userModel = require("../models/userModels");

const signInUser = function (req, res) {
	const user = req.body;
	const newUser = new userModel(user);

	newUser
		.save()
		.then((doc) => {
			return res.status(200).json(doc);
		})
		.catch((error) => {
			return res.status(400).json(error);
		});
};

module.exports = { signInUser };
