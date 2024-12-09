require('dotenv').config()
const User = require('./model')
const jwt = require('jsonwebtoken')

const secret = process.env.JWT_SECRET

module.exports.signup_get = (req, res) => {
	res.json({ message: 'signup' })
}

module.exports.login_get = (req, res) => {
	res.json({ message: 'login' })
}

module.exports.signup_post = async (req, res) => {
	const { personalCode, email, password, fullName, type } = req.body

	try {
		await User.create({
			personalCode,
			email,
			password,
			fullName,
			type
		})

		return res.status(200).json({ message: 'signed up' })
	} catch (err) {
		return res.status(400).json({ error: err.message })
	}
}

module.exports.login_post = async (req, res) => {
	const { email, password } = req.body

	try {
		const user = await User.login(email, password)
		const token = createToken(user._id)

		res.status(200).json({ token, role: user.type })
	} catch (err) {
		res.status(400).json({ err })
	}
}

module.exports.logout_get = (req, res) => {
	res.cookie('jwt', '', {
		secure: true,
		httpOnly: true,
		sameSite: 'None',
		maxAge: 1,
	})
	res.status(200).json({ message: 'logout' })
}

const createToken = id => {
	const payload = { id }
	return jwt.sign(payload, secret, { expiresIn: '1h' })
}
