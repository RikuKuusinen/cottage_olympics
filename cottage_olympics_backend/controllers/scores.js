const express = require("express");
const TYPES = require("tedious").TYPES;
const db = require("./db.js");

var scoreRouter = express.Router();

/* GET sports. */
scoreRouter.get("/", function (req, res) {
  var conn = db.createConnection();
  var request = db.createRequest("SELECT * FROM [dbo].[Score]", conn);
  db.stream(request, conn, res, []);
});

/* GET scores by sport id and include user. */
scoreRouter.get("/sport/:id", function (req, res) {
  var conn = db.createConnection();

  var request = db.createRequest(
    "SELECt* from score inner join dbo.[User] on [dbo].[User].UserId = score.UserId where sportId = @id",
    conn
  );
  request.addParameter("id", TYPES.Int, req.params.id);
  db.stream(request, conn, res, []);
});

/* GET single sport. */
scoreRouter.get("/:id", function (req, res) {
  var conn = db.createConnection();

  var request = db.createRequest(
    "select * from sport where sportId = @id for json path, without_array_wrapper",
    conn
  );
  request.addParameter("id", TYPES.Int, req.params.id);
  db.stream(request, conn, res, "{}");
});

/* POST sport. */
scoreRouter.post("/", function (req, res) {
  var connection = db.createConnection();
  var request = db.createRequest(
    "insert into sport values (@sportName, @sportDescription); SELECT SCOPE_IDENTITY() AS SportId",
    connection
  );

  request.addParameter("sportName", TYPES.NVarChar, req.body.sportName);
  request.addParameter(
    "sportDescription",
    TYPES.NVarChar,
    req.body.sportDescription
  );
  console.log(request);
  db.stream(request, connection, res, "{}");
});

/* Delete sport. */
scoreRouter.delete("/:id", function (req, res) {
  var connection = db.createConnection();
  var request = db.createRequest(
    "Delete from Sport where SportId = @id",
    connection
  );
  request.addParameter("id", TYPES.Int, req.params.id);

  console.log(request);
  db.stream(request, connection, res, "{}");
});

module.exports = scoreRouter;
