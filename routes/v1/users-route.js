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

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const user = DUMMY_USERS.find((user) => user.id === Number(id));
  res.json({ data: user });
});

module.exports = router;
