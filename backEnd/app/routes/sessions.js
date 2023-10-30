const express = require("express");
const controller = require("../controllers/sessionsController");
const { verifyToken } = require("../controllers/verifyToken");
const auth = require("../middlewares/auth");
const router = express.Router();

router.post("/", controller.newSession);
router.get("/verify", [auth], verifyToken);

module.exports = router;
