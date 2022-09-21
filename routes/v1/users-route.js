const express = require("express");
const usersController = require("../../controllers/users-controller");

const router = express.Router();

router.get("/", usersController.getAllUser);
router.get("/:id", usersController.getUserById);
router.post("/", usersController.addNewUser);

module.exports = router;
