const express = require("express");
const HttpError = require("./models/http-error");
const usersRouter = require("./routes/v1/users-route");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/v1/users", usersRouter);

app.use((req, res, next) => {
  const error = new HttpError("Route not found", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error" });
});

app.listen(port);
