const mongoose = require("mongoose");

const planSchema = new mongoose.Schema({
  name: String,
  date: Date,
  priority: ['low', 'medium', 'high'],
  isCompleted: Boolean
});

const Plan = mongoose.model("plan", planSchema);

module.exports = Plan;