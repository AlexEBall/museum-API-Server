const router = require("express").Router();
const cafamRoutes = require("./cafam");

// Book routes
router.use("/cafam", cafamRoutes);

module.exports = router;
