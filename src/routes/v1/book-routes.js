const {
    create,
    get,
    destroy,
} = require("../../controllers/book-controller.js");
const express = require("express");

const router = express.Router();

router.post("/books/", create);
router.get("/books/:id", get);
router.delete("/books/:id", destroy);

module.exports = router;
