const BookRoutes = require("./book-routes.js");
const express = require("express");

const router = express.Router();

router.use("/v1/", BookRoutes);

module.exports = router;
