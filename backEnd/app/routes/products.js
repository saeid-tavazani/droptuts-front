const express = require("express");
const { getProduct } = require("../controllers/productsController");

const router = express.Router();

router.get("/", getProduct);

module.exports = router;
