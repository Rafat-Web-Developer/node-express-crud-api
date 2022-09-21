const express = require("express");

const router = express.Router();

const DUMMY_USERS = [
  {
    id: 1,
    name: "Rafat Hossain",
  },
];

router.get("/", (req, res) => {
  res.json({ data: DUMMY_USERS });
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  const user = DUMMY_USERS.find((user) => user.id === Number(id));
  if (!user) {
    const error = new Error("Could not find that user");
    error.code = 404;
    return next(error);
  }
  res.json({ data: user });
});

module.exports = router;
