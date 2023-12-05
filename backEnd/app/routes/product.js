const express = require("express");
const auth = require("../middlewares/auth");
const {
  newSession,
  verifyToken,
} = require("../controllers/sessionsController");

const router = express.Router();

router.post("/", [auth], verifyToken);

module.exports = router;
