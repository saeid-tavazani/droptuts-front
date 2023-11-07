const express = require("express");
const validator = require("../middlewares/validator");

const {
  updateUserPass,
  updateUserInfo,
  editStatus,
  deleteUsers,
  users,
} = require("../controllers/users");
const {
  passValidator,
  phoneNumberValidator,
  customMadeValidator,
  idValidator,
  emailValidator,
} = require("../services/ValidatorService");

const router = express.Router();

router.get("/", users);
router.put("/delete", validator([idValidator().notEmpty()]), deleteUsers);
router.put(
  "/",
  validator([
    idValidator().notEmpty(),
    customMadeValidator("status").notEmpty(),
  ]),
  editStatus
);
router.put(
  "/update/info",
  validator([
    emailValidator().notEmpty(),
    phoneNumberValidator().notEmpty(),
    idValidator().notEmpty(),
    customMadeValidator("picture").notEmpty(),
  ]),
  updateUserInfo
);
router.put(
  "/update/pass",
  validator([
    passValidator().notEmpty(),
    customMadeValidator("currentPassword").notEmpty(),
    idValidator().notEmpty(),
  ]),
  updateUserPass
);

module.exports = router;
