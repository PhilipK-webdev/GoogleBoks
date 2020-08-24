const router = require("express").Router();
const {
    getBooK,
    newBook,
    deleteBook
} = require("../controller/book-controller.js");

router.get("/api/books", getBooK);
router.post("/api/books", newBook);
router.delete("/api/books/:id", deleteBook);

module.exports = router;