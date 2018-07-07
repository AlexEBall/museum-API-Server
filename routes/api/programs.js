const router = require("express").Router();
const cafamProgramsController = require("../../controllers/programsController");

// Matches with "/api/cafamPrograms"
router
    .route("/")
    .get(cafamProgramsController.findAll)
    .post(cafamProgramsController.createProgram);

module.exports = router;