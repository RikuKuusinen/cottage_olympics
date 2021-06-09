const express = require("express");
const TYPES = require("tedious").TYPES;
const db = require("./db.js");

var scoreRouter = express.Router();

/* GET scores. */
scoreRouter.get("/", function (req, res) {
  var conn = db.createConnection();
  var request = db.createRequest("SELECT * FROM [dbo].[Score]", conn);
  db.stream(request, conn, res, []);
});

/* GET scores by sport id and include user. */
scoreRouter.get("/sport/:id", function (req, res) {
  var conn = db.createConnection();

  var request = db.createRequest(
    "SELECt * from score inner join dbo.[User] on [dbo].[User].UserId = score.UserId where sportId = @id",
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

/* POST score. */
scoreRouter.post("/", function (req, res) {
  console.log(req.body);
  var connection = db.createConnection();

  if (req.body.scoreId > 0) {
    request = db.createRequest(
      "Update [dbo].[Score] SET TotalScore = @totalScore where scoreId = @scoreId; SELECT @scoreId as ScoreId",
      connection
    );
    request.addParameter("scoreId", TYPES.Numeric, req.body.scoreId);

    request.addParameter("totalScore", TYPES.Numeric, req.body.totalScore);

    console.log(request.params);
    db.stream(request, connection, res, {});
  } else {
    request = db.createRequest(
      "insert into [dbo].[Score] (TotalScore, SportId, UserId)  values (@totalScore, @sportId, @userId); SELECT SCOPE_IDENTITY() AS ScoreId",
      connection
    );

    console.log("sportIDDDDDDDDD", req.body.sportId);
    console.log("sportIDDDDDDDDD", req.body.sportId);
    request.addParameter("totalScore", TYPES.Decimal, req.body.totalScore);
    request.addParameter("sportId", TYPES.Numeric, req.body.sportId);
    request.addParameter("userId", TYPES.Numeric, req.body.userId);

    console.log(request.params);
    db.stream(request, connection, res, {});
  }
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
