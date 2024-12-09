const express = require("express");
const router = express.Router();

const userRoutes = require("../domains/user");
const planRoutes = require("../domains/plan");

router.use("/user", userRoutes);
router.use("/plan", planRoutes);

module.exports = router;