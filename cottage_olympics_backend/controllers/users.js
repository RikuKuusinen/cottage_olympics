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

/* GET usser by id. */
usersRouter.get("/:id", function (req, res) {
  var conn = db.createConnection();

  var request = db.createRequest(
    "select * from [dbo].[User] where userId = @id for json path, without_array_wrapper",
    conn
  );
  request.addParameter("id", TYPES.Int, req.params.id);
  db.stream(request, conn, res, "{}");
});

/* GET user by user name. */
usersRouter.get("/username/:username", function (req, res) {
  var conn = db.createConnection();

  var request = db.createRequest(
    "select TOP 1 * from [dbo].[User] where username = @username",
    conn
  );
  console.log(request);

  request.addParameter("username", TYPES.NChar, req.params.username);
  db.stream(request, conn, res, {});
});

/* POST create comment. */
usersRouter.post("/", function (req, res) {
  var conn = db.createConnection();
  var request = db.createRequest(
    "insert into  [dbo].[User] values (@userName); SELECT SCOPE_IDENTITY() AS UserId",
    conn
  );

  request.addParameter("userName", TYPES.NVarChar, req.body.userName);

  db.stream(request, conn, res, "{}");
});

module.exports = usersRouter;
