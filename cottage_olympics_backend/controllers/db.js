const config = require("../utils/config");
const { Connection, Request } = require("tedious");

// Create connection to database

function createConnection() {
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
    },
  };

  var connection = new Connection(sqlConfig);

  return connection;
}

// Attempt to connect and execute queries if connection goes through

function createRequest(query, connection) {
  var req = new Request(query, function (err, rowCount) {
    (err, rowCount) => {
      if (err) {
        connection.end();
        console.error(err.message);
      } else {
        console.log(`${rowCount} row(s) returned`);
      }
    };
  });
  return req;
}

function stream(query, connection, output, defaultContent) {
  var request = query;
  if (typeof query == "string") {
    request = createRequest(query, connection);
  }
  var empty = true;
  request.on("row", function (columns) {
    if (columns) {
      empty = false;
    }
    let val = {};
    columns.forEach(function (column) {
      val[column.metadata.colName] = column.value;
    });
    if (Array.isArray(defaultContent)) {
      defaultContent.push(val);
    } else {
      defaultContent = val;
    }
  });

  request.on("done", function (rowCount, more, rows) {
    _OnDone(empty, defaultContent, output, connection);
  });

  request.on("doneProc", function (rowCount, more, rows) {
    _OnDone(empty, defaultContent, output, connection);
  });

  executeRequest(request, connection);
}

function _OnDone(empty, defaultContent, output) {
  defaultContent = JSON.stringify(defaultContent);
  if (empty) {
    output.write(defaultContent);
    console.log("No results from database - default content is returned.");
    output.end();
  } else {
    try {
      output.write(defaultContent);

      console.log("Closing Http Response output.");
      output.end();
    } catch (err) {
      console.error(err);
    }
  }
}

function executeRequest(request, connection) {
  connection.connect();

  connection.on("connect", function (err) {
    if (err) {
      console.trace(err);
      throw err;
    }
    connection.execSql(request);
  });
}

module.exports.createConnection = createConnection;
module.exports.createRequest = createRequest;
module.exports.executeRequest = executeRequest;
module.exports.stream = stream;
