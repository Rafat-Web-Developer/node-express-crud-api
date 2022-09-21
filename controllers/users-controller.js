const HttpError = require("../models/http-error");
const uuid = require("uuid");

const DUMMY_USERS = [];

const getAllUser = (req, res) => {
  res.json({ users: DUMMY_USERS });
};

const getUserById = (req, res, next) => {
  const { id } = req.params;
  const user = DUMMY_USERS.find((user) => user.id == id);
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

const updateUser = (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  const updatedUser = { ...DUMMY_USERS.find((user) => user.id == id) };
  const updatedUserIndex = DUMMY_USERS.findIndex((user) => user.id === id);
  updatedUser.name = name;
  DUMMY_USERS[updatedUserIndex] = updatedUser;
  res.status(200).json({ user: updatedUser });
};

exports.getAllUser = getAllUser;
exports.getUserById = getUserById;
exports.addNewUser = addNewUser;
exports.updateUser = updateUser;
