const Plan = require('./model')

module.exports.get_plans = async (req, res) => {
	try{
		const plans = await Plan.find()

		res.status(200).json(plans)
	} catch (err) {
		res.status(400).json({ error: err.message })
	}
}

module.exports.update_plan = async (req, res) => {
	const { id, isCompleted } = req.body

	try {
		const plan = await Plan.findById(id)
		plan.isCompleted = isCompleted
		await plan.save()

		res.status(200).json({ plan })
	} catch (err) {
		res.status(400).json({ error: err.message })
	}
}

module.exports.create_plan = async (req, res) => {
	const { name, date, priority, isCompleted } = req.body

	try {

		const plan = await Plan.create({
			name,
			date,
			priority,
			isCompleted
		})

		res.status(200).json({ plan })
	} catch (err) {
		res.status(400).json({ error: err.message })
	}
}
