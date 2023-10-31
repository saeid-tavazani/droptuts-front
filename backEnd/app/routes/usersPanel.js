const express = require("express");

const { users } = require("../controllers/getUsersPanel");

const router = express.Router();

router.get("/", users);

module.exports = router;
