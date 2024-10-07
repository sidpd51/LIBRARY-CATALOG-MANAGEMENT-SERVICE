const { create, get } = require("../../controllers/book-controller.js");
const express = require("express");

const router = express.Router();

router.post("/books/", create);
router.get("/books/:id", get);

module.exports = router;
