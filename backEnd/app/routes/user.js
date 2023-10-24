const express = require("express");
const router = express.Router();
const { userList } = require("../controllers/userController");
router.get("/", userList);

module.exports = router;
