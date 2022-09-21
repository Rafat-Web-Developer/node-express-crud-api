const express = require("express");
const HttpError = require("../../models/http-error");

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
    return next(new HttpError("Could not found that user", 404));
  }
  res.json({ data: user });
});

module.exports = router;
