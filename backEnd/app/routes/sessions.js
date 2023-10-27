const express = require("express");
const controller = require("../controllers/sessionsController");
const router = express.Router();

router.post("/", controller.newSession);

module.exports = router;
