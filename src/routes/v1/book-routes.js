const {
    create,
    get,
    destroy,
    update,
} = require("../../controllers/book-controller.js");
const express = require("express");

const router = express.Router();

router.post("/books/", create);
router.get("/books/:id", get);
router.delete("/books/:id", destroy);
router.patch("/books/:id", update);

module.exports = router;
