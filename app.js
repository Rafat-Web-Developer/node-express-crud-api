const express = require("express");
const usersRouter = require("./routes/users-route");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use(usersRouter);

app.listen(port);
