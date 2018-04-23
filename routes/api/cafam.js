const router = require("express").Router();
const cafamController = require("../../controllers/cafamController");

// Matches with "/api/cafam"
router
    .route("/")
    .get(cafamController.findAll);
    // .post(cafamController.create);

// Matches with "/api/books/:id"
// router
//     .route("/:id")
//     .get(cafamController.findById)
//     .put(cafamController.update)
//     .delete(cafamController.remove);

module.exports = router;
