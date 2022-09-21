const HttpError = require("../models/http-error");

const DUMMY_USERS = [
  {
    id: 1,
    name: "Rafat Hossain",
  },
];

const getAllUser = (req, res) => {
  res.json({ users: DUMMY_USERS });
};

const getUserById = (req, res, next) => {
  const { id } = req.params;
  const user = DUMMY_USERS.find((user) => user.id === Number(id));
  if (!user) {
    return next(new HttpError("Could not found that user", 404));
  }
  res.json({ user });
};

exports.getAllUser = getAllUser;
exports.getUserById = getUserById;
