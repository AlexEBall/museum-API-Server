const router = require("express").Router();
const cafamRoutes = require("./cafam");
const cafamProgramRoutes = require("./programs");
const cafamArtistConnectRoutes = require('./artistConnect');

// Programs routes
router.use("/cafam", cafamRoutes);
router.use("/cafamPrograms", cafamProgramRoutes);
router.use("/cafamArtistConnect", cafamArtistConnectRoutes);


module.exports = router;
