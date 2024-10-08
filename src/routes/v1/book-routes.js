const {
    create,
    get,
    destroy,
    update,
    getAll
} = require("../../controllers/book-controller.js");
const express = require("express");

const router = express.Router();

router.post("/books/", create);
router.get("/books/:id", get);
router.delete("/books/:id", destroy);
router.patch("/books/:id", update);
router.get("/books/", getAll);

module.exports = router;
