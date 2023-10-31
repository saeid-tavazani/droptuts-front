const express = require("express");
const { newSession } = require("../controllers/sessions/sessionsController");
const { verifyToken } = require("../controllers/sessions/verifyToken");
const auth = require("../middlewares/auth");
const router = express.Router();

router.post("/", newSession);
router.get("/verify", [auth], verifyToken);

module.exports = router;
