const express = require("express");
const { authAdmin } = require("../middlewares/auth");
const { newProduct } = require("../controllers/productController");

const router = express.Router();

router.post("/", [authAdmin], newProduct);

module.exports = router;
