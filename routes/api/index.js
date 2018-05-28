const router = require("express").Router();
const cafamRoutes = require("./cafam");
const cafamProgramRoutes = require("./programs");

// Programs routes
router.use("/cafam", cafamRoutes);
router.use("/cafamPrograms", cafamProgramRoutes);

module.exports = router;
