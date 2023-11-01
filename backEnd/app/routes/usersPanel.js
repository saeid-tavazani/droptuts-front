const express = require("express");

const { users } = require("../controllers/users/getUsersPanel");
const { deleteUsers } = require("../controllers/users/deleteUser");
const { editStatus } = require("../controllers/users/changeStatus");

const router = express.Router();

router.get("/", users);
router.delete("/:id", deleteUsers);
router.put("/", editStatus);

module.exports = router;
