const express = require("express");

const {
  updateUserPass,
  updateUserInfo,
  editStatus,
  deleteUsers,
  users,
} = require("../controllers/users");

const router = express.Router();

router.get("/", users);
router.delete("/:id", deleteUsers);
router.put("/", editStatus);
router.put("/update/info", updateUserInfo);
router.put("/update/pass", updateUserPass);

module.exports = router;
