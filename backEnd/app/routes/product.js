const express = require("express");
const { authAdmin } = require("../middlewares/auth");
const {
  newProduct,
  selectAllProduct,
  selectPassword,
  selectProduct,
  selectProductId,
} = require("../controllers/productController");
const validator = require("../middlewares/validator");
const {
  customMadeValidator,
  idValidator,
} = require("../services/ValidatorService");

const router = express.Router();

router.post(
  "/new",
  [
    authAdmin,
    validator([
      customMadeValidator("title").notEmpty(),
      customMadeValidator("description").notEmpty(),
      customMadeValidator("status").notEmpty(),
      customMadeValidator("price").notEmpty(),
      customMadeValidator("poster").notEmpty(),
      customMadeValidator("discount").notEmpty(),
      customMadeValidator("link").notEmpty(),
      customMadeValidator("pass").notEmpty(),
    ]),
  ],
  newProduct
);
router.get("/admin", [authAdmin], selectAllProduct);
router.get("/", selectProduct);
router.get("/:id", selectProductId);
router.get("/pass", [authAdmin], selectPassword);

module.exports = router;
