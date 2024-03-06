const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	userName: {
		type: String,
		required: [true, "userName is must"],
		minLength: [3, "must have min length of 3"],
		trim: true,
	},
	email: {
		type: String,
		validate: {
			validator: (email) => email.includes("@"),
			message: "invalid password",
		},
	},
	password: String,
	rating: {
		type: Number,
		min: 3,
	},
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
