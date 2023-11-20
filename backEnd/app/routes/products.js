const express = require("express");
const {
  getProductAll,
  getProductActive,
  addProduct,
  editProduct,
} = require("../controllers/productsController");
const auth = require("../middlewares/auth");
const validator = require("../middlewares/validator");
const {
  idValidator,
  customMadeValidator,
  jsonValidator,
} = require("../services/ValidatorService");
const router = express.Router();

router.get("/all", [auth], getProductAll);
router.get("/", getProductActive);
router.post("/new", [
  auth,
  validator([
    idValidator().notEmpty(),
    customMadeValidator("title").notEmpty(),
    customMadeValidator("description").notEmpty(),
    customMadeValidator("category").optional(),
    customMadeValidator("status").optional(),
    customMadeValidator("price").optional(),
    customMadeValidator("poster").optional(),
    customMadeValidator("discount").optional(),
    // jsonValidator("headings").optional(),
  ]),
  addProduct,
]);

router.put("/edit", [
  auth,
  validator([
    idValidator().notEmpty(),
    customMadeValidator("title").notEmpty(),
    customMadeValidator("description").notEmpty(),
    customMadeValidator("price").optional(),
    customMadeValidator("poster").optional(),
    customMadeValidator("discount").optional(),
    customMadeValidator("active").optional(),
    jsonValidator("headings").optional(),
  ]),
  editProduct,
]);

module.exports = router;
