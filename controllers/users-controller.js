const HttpError = require("../models/http-error");
const uuid = require("uuid");

const DUMMY_USERS = [];

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

const addNewUser = (req, res) => {
  const { name } = req.body;
  const newUser = {
    id: uuid.v4(),
    name,
  };
  DUMMY_USERS.push(newUser);
  res.status(201).json({ user: newUser });
};

exports.getAllUser = getAllUser;
exports.getUserById = getUserById;
exports.addNewUser = addNewUser;
