require("dotenv").config();

let PORT = process.env.PORT;
let SQLURI = process.env.SQLURI;
let PASSWORD = process.env.PASSWORD;
let USERNAME = process.env.SQLUSER;
let DBNAME = process.env.DBNAME;

module.exports = {
  SQLURI,
  PORT,
  PASSWORD,
  USERNAME,
  DBNAME,
};
