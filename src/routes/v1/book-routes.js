const { create } = require("../../controllers/book-controller.js");
const express = require("express");

const router = express.Router();

router.post("/books/", create);

module.exports = router;
