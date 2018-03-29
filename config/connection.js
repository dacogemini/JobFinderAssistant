var mysql = require("mysql");

// =============================================================================
// mysql connection
// =============================================================================
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2003Sv650',
    database: 'JobCat_db'
})

// Make connection.
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  // Export connection for our ORM to use.
  module.exports = connection;