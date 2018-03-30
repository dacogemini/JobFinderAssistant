var mysql = require("mysql");

// =============================================================================
// mysql connection
// =============================================================================
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'JobCat_db'
})

// Make connection.
connection.connect(function(err) {
    if (err) {
      console.error("JobCat_db error connecting: " + err.stack);
      return;
    }
    console.log("JobCat_db connected as id " + connection.threadId);
  });
  
  // Export connection for our ORM to use.
  module.exports = connection;

  