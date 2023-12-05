const express = require("express");
const { authAdmin } = require("../middlewares/auth");
const {
  newProduct,
  selectAllProduct,
} = require("../controllers/productController");

const router = express.Router();

router.post("/", [authAdmin], newProduct);
router.get("/admin", [authAdmin], selectAllProduct);

module.exports = router;
