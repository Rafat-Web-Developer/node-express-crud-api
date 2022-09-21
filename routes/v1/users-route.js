const express = require("express");
const usersController = require("../../controllers/users-controller");

const router = express.Router();

router.get("/all", usersController.getAllUser);
router.get("/random", usersController.getRandomUser);
router.get("/:id", usersController.getUserById);
router.post("/save", usersController.addNewUser);
router.patch("/:id", usersController.updateUser);
router.delete("/:id", usersController.deleteUser);

module.exports = router;
