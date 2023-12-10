const express = require("express");
const { authAdmin } = require("../middlewares/auth");
const {
  newProduct,
  selectAllProduct,
  selectPassword,
} = require("../controllers/productController");

const router = express.Router();

router.post("/new", [authAdmin], newProduct);
router.get("/admin", [authAdmin], selectAllProduct);
router.get("/pass", [authAdmin], selectPassword);

module.exports = router;
