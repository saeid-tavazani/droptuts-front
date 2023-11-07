const express = require("express");
// const validator = require("../middlewares/validator");
// const { emailValidator } = require("../services/ValidatorService");
const { getProduct } = require("../controllers/products");

const router = express.Router();

router.get("/", getProduct);

module.exports = router;
