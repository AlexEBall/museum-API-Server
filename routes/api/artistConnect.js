const router = require("express").Router();
const artistConnectController = require("../../controllers/artistConnectControllerr");

// Matches with "/api/cafamPrograms"
router
    .route("/")
    .get(artistConnectController.findAll);
    // .post(artistConnectController.createProgram);

router
    .route("/:id")
    .get(artistConnectController.findByID);
    // .put(artistConnectController.updateProgram)
    // .delete(artistConnectController.removeProgram);
    

module.exports = router;