const User = require("../model/UserModel.js");
const { createSecretToken } = require("../utils/SearchToken");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.Signup = async (req, res, next) => {
	try {
		const { email, password, username } = req.body;
		if (!email || !password || !username) {
			return res.status(400).json({ message: "All fields are required" });
		}
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.json({ message: "User already exists" });
		}
		const check = await User.findOne({ email: email });
		if (check) {
			return res.json("exist");
		}
		const user = await User.create({ email, password, username });
		// const token = createSecretToken(user._id);
		// res.cookie("token", token, {
		//   withCredentials: true,
		//   httpOnly: false,
		// });
		res
			.status(201)
			.json({ message: "User signed in successfully", success: true ,user});
		next();
	} catch (error) {
		console.error(error);
	}
};

module.exports.Login = async (req, res) => {
	try {
		const { email, password } = req.body;
		if (!email || !password) {
			return res.status(400).json({ message: "All fields are required" });
		}
		const user = await User.findOne({ email });
		
		if (!user) {
			return res.status(400).json({ message: "User does not exist" });
		}
		const auth = await bcrypt.compare(password, user.password);
		if (!auth) {
			return res.status(400).json({ message: "Incorrect password or email" });
		}

		const token = createSecretToken(user._id);
		return res
			.status(201)
			.cookie("token", token, {
				maxAge: 1 * 24 * 60 * 60 * 1000,
				withCredentials: true,
				httpOnly: true,
				secure: process.env.NODE_ENV === "production", // Only send over HTTPS in production
				sameSite: "strict", // Strict same-site policy
			})
			.json({ message: "User logged in successfully", success: true, user });
	} catch (error) {
		console.error(error);
	}
};

module.exports.Logout = async (req, res) => {
	try {
		req.user=null;
		return res.status(200).cookie("token", "", { maxAge: "0" }).json({
			message: "logged out successfully!",
			success: true,
		});
	} catch (e) {
		console.log(e);
	}
};

