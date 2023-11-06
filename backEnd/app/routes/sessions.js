const express = require("express");
const {
  newSession,
  verifyToken,
} = require("../controllers/sessionsController");

const auth = require("../middlewares/auth");
const router = express.Router();

router.post("/", newSession);
router.get("/verify", [auth], verifyToken);

module.exports = router;
