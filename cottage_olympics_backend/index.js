const config = require("./utils/config");
const express = require("express");
const { Connection, Request } = require("tedious");

const PORT = process.env.PORT || 3001;

const app = express();

console.log(config.USERNAME);
// Create connection to database
const sqlConfig = {
  authentication: {
    options: {
      userName: config.USERNAME,
      password: config.PASSWORD,
    },
    type: "default",
  },
  server: config.SQLURI,
  options: {
    database: config.DBNAME, //update me
    encrypt: true,
    rowCollectionOnRequestCompletion: true,
  },
};

const connection = new Connection(sqlConfig);
// Attempt to connect and execute queries if connection goes through
connection.connect();

connection.on("connect", (err) => {
  if (err) {
    console.error(err.message);
  } else {
    queryDatabase();
  }
});

function queryDatabase() {
  console.log("Reading rows from the Table...");

  // Read all rows from table
  const request = new Request(
    `SELECT [UserName]
      ,[UserId]
  FROM [dbo].[User]`,
    (err, rowCount, rows) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log(rows);
        console.log(`${rowCount} row(s) returned`);
      }
    }
  );

  //   request.on("row", (columns) => {
  //     columns.forEach((column) => {
  //       console.log("%s\t%s", column.metadata.colName, column.value);
  //     });
  //   });

  connection.execSql(request);
}
