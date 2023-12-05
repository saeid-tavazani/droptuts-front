const express = require("express");
const auth = require("../middlewares/auth");
const { newProduct } = require("../controllers/productController");

const router = express.Router();

router.post("/", [auth], newProduct);

module.exports = router;
