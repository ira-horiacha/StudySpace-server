const express = require("express");
const routes = express.Router();

const {
	get_plans,
	create_plan,
	update_plan
} = require("./controller");

routes.get("/get_plans", get_plans);
routes.post("/create_plan", create_plan);
routes.put("/update_plan", update_plan);


module.exports = routes;