const router = require("express").Router();
const booksController = require("../../controllers/booksControllers");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)


// Matches with "/api/books/:id"
router
  .route("/savedItem")
  .get(booksController.findById)
  .delete(booksController.remove);

module.exports = router;
