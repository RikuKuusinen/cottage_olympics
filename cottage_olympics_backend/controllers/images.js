const express = require("express");
const TYPES = require("tedious").TYPES;
const db = require("./db.js");
var multer = require("multer");
var upload = multer({ dest: "uploads/" });
var imagesRouter = express.Router();

/* GET images. */
imagesRouter.get("/", function (req, res) {
  var conn = db.createConnection();
  var request = db.createRequest("SELECT * FROM [dbo].[image]", conn);
  db.stream(request, conn, res, []);
});

/* GET single image. */
imagesRouter.get("/:id", function (req, res) {
  var conn = db.createConnection();

  var request = db.createRequest(
    "select * from image where imageId = @id",
    conn
  );
  request.addParameter("id", TYPES.Int, req.params.id);
  db.stream(request, conn, res, "{}");
});

/* POST image. */
imagesRouter.post("/", upload.single("file"), function (req, res) {
  console.log("reqqqqqqqqqqq", req);
  console.log("podiiiiiiiiii", req.body);
  console.log("fileeeeeeeeee", req.file);

  req.file.readAsBinaryString();

  var connection = db.createConnection();
  var request = db.createRequest(
    "insert into image (img, title) values (@img, @title); SELECT SCOPE_IDENTITY() AS imageId",
    connection
  );
  request.addParameter("img", TYPES.VarBinary, req.file.path);
  request.addParameter("title", TYPES.NVarChar, "test");
  console.log(request);
  db.stream(request, connection, res, "{}");
});

function getBinaryFromFile(file) {
  return new Promise((resolve, reject) => {
    reader.addEventListener("load", () => resolve(reader.result));
    reader.addEventListener("error", (err) => reject(err));

    reader.readAsBinaryString(file);
  });
}
/* Delete image. */
imagesRouter.delete("/:id", function (req, res) {
  var connection = db.createConnection();
  var request = db.createRequest(
    "Delete from image where imageId = @id",
    connection
  );
  request.addParameter("id", TYPES.Int, req.params.id);

  console.log(request);
  db.stream(request, connection, res, "{}");
});

module.exports = imagesRouter;
