const router = require("express").Router();
const artistConnectController = require('../../controllers/artistConnectController');

// Matches with "/api/cafamArtistConnect"
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