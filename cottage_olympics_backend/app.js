const config = require("./utils/config");
const express = require("express");

const app = express();
const cors = require("cors");
const usersRouter = require("./controllers/users");

app.use(cors());
app.use(express.json());
app.use(express.static("build"));

app.use("/api/users", usersRouter);

module.exports = app;
