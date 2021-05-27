const express = require("express");
const TYPES = require("tedious").TYPES;
const db = require("./db.js");

var sportsRouter = express.Router();

/* GET sports. */
sportsRouter.get("/", function (req, res) {
  var conn = db.createConnection();
  var request = db.createRequest("SELECT * FROM [dbo].[Sport]", conn);
  db.stream(request, conn, res, []);
});

/* GET single sport. */
sportsRouter.get("/:id", function (req, res) {
  var conn = db.createConnection();

  var request = db.createRequest(
    "select * from sport where sportId = @id for json path, without_array_wrapper",
    conn
  );
  request.addParameter("id", TYPES.Int, req.params.id);
  db.stream(request, conn, res, "{}");
});

/* POST sport. */
sportsRouter.post("/", function (req, res) {
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
sportsRouter.delete("/:id", function (req, res) {
  var connection = db.createConnection();
  var request = db.createRequest(
    "Delete from Sport where SportId = @id",
    connection
  );
  request.addParameter("id", TYPES.Int, req.params.id);

  console.log(request);
  db.stream(request, connection, res, "{}");
});

module.exports = sportsRouter;
