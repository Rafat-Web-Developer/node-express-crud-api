const express = require("express");
const usersRouter = require("./routes/v1/users-route");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/v1/users", usersRouter);

app.listen(port);
