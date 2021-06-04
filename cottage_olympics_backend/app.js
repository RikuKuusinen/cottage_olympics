const config = require("./utils/config");
const express = require("express");
const cors = require("cors");
const path = require("path");

const usersRouter = require("./controllers/users");
const sportsRouter = require("./controllers/sports");
const scoreRouter = require("./controllers/scores");

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.static("build"));
app.use("/api/users", usersRouter);
app.use("/api/sports", sportsRouter);
app.use("/api/scores", scoreRouter);

app.get("*", function (req, res) {
  res.sendFile("index.html", {
    root: path.join(__dirname, "./build/"),
  });
});

module.exports = app;
