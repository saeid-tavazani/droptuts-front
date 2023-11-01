const express = require("express");

const { users } = require("../controllers/users/getUsersPanel");
const { deleteUsers } = require("../controllers/users/deleteUser");
const { editStatus } = require("../controllers/users/changeStatus");
const { updateUserInfo } = require("../controllers/users/updateInfo");
const { updateUserPass } = require("../controllers/users/updateUserPass");

const router = express.Router();

router.get("/", users);
router.delete("/:id", deleteUsers);
router.put("/", editStatus);
router.put("/update/info", updateUserInfo);
router.put("/update/pass", updateUserPass);

module.exports = router;
