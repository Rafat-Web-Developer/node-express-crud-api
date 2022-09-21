const HttpError = require("../models/http-error");
const uuid = require("uuid");

let DUMMY_USERS = [
  {
    id: 1,
    gender: "male",
    name: "Rafat Hossain",
    contact: "01876903613",
    address: "Satkania, Chittagong, Bangladesh",
    photoUrl: "",
  },
  {
    id: 2,
    gender: "female",
    name: "Nusrat",
    contact: "01556903613",
    address: "2 no. gate, Chittagong, Bangladesh",
    photoUrl: "",
  },
  {
    id: 3,
    gender: "male",
    name: "Rifat",
    contact: "01886903610",
    address: "Satkania, Chittagong, Bangladesh",
    photoUrl: "",
  },
  {
    id: 4,
    gender: "male",
    name: "Sayem",
    contact: "01553903613",
    address: "Jamal Khan, Chittagong, Bangladesh",
    photoUrl: "",
  },
  {
    id: 5,
    gender: "male",
    name: "Jubair",
    contact: "01376903623",
    address: "Rahattarpul, Chittagong, Bangladesh",
    photoUrl: "",
  },
  {
    id: 6,
    gender: "male",
    name: "Jahed",
    contact: "01818903612",
    address: "Motijil, Dhaka, Bangladesh",
    photoUrl: "",
  },
  {
    id: 7,
    gender: "female",
    name: "Fahima",
    contact: "01626874642",
    address: "New Market, Chittagong, Bangladesh",
    photoUrl: "",
  },
  {
    id: 8,
    gender: "male",
    name: "Fahim",
    contact: "01553231523",
    address: "Banani, Dhaka, Bangladesh",
    photoUrl: "",
  },
  {
    id: 9,
    gender: "male",
    name: "Murad",
    contact: "01818562587",
    address: "Khulna, Bangladesh",
    photoUrl: "",
  },
  {
    id: 10,
    gender: "male",
    name: "Mr. ABC",
    contact: "01877777777",
    address: "Muradpur, Bangladesh",
    photoUrl: "",
  },
];

const getAllUser = (req, res) => {
  res.json({ users: DUMMY_USERS });
};

function generateRandomNumber(min, max) {
  let rand_num = Math.random() * (max - min) + min;
  rand_num = Math.round(rand_num);
  return rand_num;
}

const getRandomUser = (req, res) => {
  const totalUsers = DUMMY_USERS.length;
  let random_number = generateRandomNumber(1, totalUsers);
  const random_user = DUMMY_USERS.find((user) => user.id === random_number);
  res.json({ user: random_user });
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

const deleteUser = (req, res) => {
  const { id } = req.params;
  DUMMY_USERS = DUMMY_USERS.filter((user) => user.id != id);
  res.status(200).json({ message: "User deleted successfully" });
};

exports.getAllUser = getAllUser;
exports.getRandomUser = getRandomUser;
exports.getUserById = getUserById;
exports.addNewUser = addNewUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
