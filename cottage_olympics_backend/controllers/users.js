const express = require("express");
const TYPES = require("tedious").TYPES;
const db = require("./db.js");

var usersRouter = express.Router();

/* GET comments. */
usersRouter.get("/", function (req, res) {
  console.log("tultiin tänne");
  var conn = db.createConnection();
  var request = db.createRequest("SELECT * FROM [dbo].[User]", conn);
  db.stream(request, conn, res, []);
});

/* GET single comment. */
usersRouter.get("/:id", function (req, res) {
  var conn = db.createConnection();

  var request = db.createRequest(
    "select * from comments where id = @id for json path, without_array_wrapper",
    conn
  );
  request.addParameter("id", TYPES.Int, req.params.id);
  db.stream(request, conn, res, "{}");
});

/* POST create comment. */
usersRouter.post("/", function (req, res) {
  var connection = db.createConnection();
  var request = db.createRequest(
    "insert into Comments values (@author, @text)",
    connection
  );

  request.addParameter("author", TYPES.NVarChar, req.body.author);
  request.addParameter("text", TYPES.NVarChar, req.body.text);

  db.stream(request, conn, res, "{}");
});

module.exports = usersRouter;
