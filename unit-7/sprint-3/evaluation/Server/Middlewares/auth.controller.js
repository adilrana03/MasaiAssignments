const User = require('../Database/user');
const jwt = require('jsonwebtoken');
const newToken = user => {
	return jwt.sign({ user }, 'secret');
};

const register = async (req, res) => {
	try {
		let user = await User.findOne({ email: req.body.email });
		if (user) {
			return res.send({ message: 'Please try another email address' });
		}
		user = await User.create(req.body);
		return res.status(201).send({ email: user.email, id: user._id });
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

const login = async (req, res) => {
	try {
		const user = await User.findOne({ email: req.body.email });

		if (!user) return res.status(404).send({ message: 'Invalid Credentials' });

		const match = user.password === req.body.password;

		if (!match) return res.status(404).send({ message: 'Invalid Credentials' });

		const token = newToken(user);

		return res.status(200).send({ token: token });
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

module.exports = {
	register,
	login,
};
