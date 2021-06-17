const config = require("./utils/config");
const express = require("express");
const cors = require("cors");
const path = require("path");
const formData = require("express-form-data");

const usersRouter = require("./controllers/users");
const sportsRouter = require("./controllers/sports");
const scoreRouter = require("./controllers/scores");
const imagesRouter = require("./controllers/images");
const cloudinaryRouter = require("./controllers/cloudinaryImages");

const app = express();

app.use(cors());

app.use(express.json());
app.use(formData.parse());

app.use(express.static("build"));
app.use("/api/users", usersRouter);
app.use("/api/sports", sportsRouter);
app.use("/api/scores", scoreRouter);
app.use("/api/images", imagesRouter);
app.use("/api/cloudinaryImages", cloudinaryRouter);

app.get("*", function (req, res) {
  res.sendFile("index.html", {
    root: path.join(__dirname, "./build/"),
  });
});

module.exports = app;
