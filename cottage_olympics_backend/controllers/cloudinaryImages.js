require("dotenv").config();

const express = require("express");
const cloudinary = require("cloudinary");
const formData = require("express-form-data");
var multer = require("multer");
var upload = multer({ dest: "uploads/" });

var cloudinaryRouter = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

/* GET sports. */
cloudinaryRouter.get("/", function (req, res) {
  cloudinary.v2.api.resources(function (error, result) {
    console.log(result, error);

    res.send(result.resources);
  });
});

/* GET single sport. */
cloudinaryRouter.get("/:id", function (req, res) {
  var conn = db.createConnection();

  var request = db.createRequest(
    "select * from sport where sportId = @id",
    conn
  );
  request.addParameter("id", TYPES.Int, req.params.id);
  db.stream(request, conn, res, "{}");
});

/* POST sport. */
cloudinaryRouter.post("/", upload.single("file"), function (req, res) {
  console.log("reqqqqqqqqqqq", req);

  const values = Object.values(req.files);
  const promises = values.map((image) =>
    cloudinary.uploader.upload(image.path)
  );

  Promise.all(promises)
    .then((results) => res.json(results))
    .catch((err) => res.status(400).json(err));
});

/* Delete sport. */
cloudinaryRouter.delete("/:id", function (req, res) {
  var connection = db.createConnection();
  var request = db.createRequest(
    "Delete from Sport where SportId = @id",
    connection
  );
  request.addParameter("id", TYPES.Int, req.params.id);

  console.log(request);
  db.stream(request, connection, res, "{}");
});

module.exports = cloudinaryRouter;
