// Dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');

/*Nick added a favicon*/
const favicon = require('serve-favicon');
app.use(favicon(path.join(__dirname, 'app/public', 'favicon.ico')));
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Default route
app.get('/', function (req, res) {
    return res.send({
        error: true,
        message: 'Home'
    })
});
// =============================================================================
// mysql connection
// =============================================================================
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'jobs_db'
})
mc.connect();
// =============================================================================
// Retrieval
// =============================================================================

// Retrieve full list
app.get('/list', function (req, res) {
    mc.query('SELECT * FROM jobs_db', function (error, results, fields) {
        if (error) throw error;
        return res.send({
            error: false,
            data: results,
            message: 'Jobs list: '
        });

    })
});

// port must be set to 8080 because incoming http requests are routed from port 80 to port 8080
app.listen(8080, function () {
    console.log('Node app is running on port 8080');
});
