// Dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
var path = require('path');
var formidable = require('formidable');
var fs = require('fs');

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
    password: '2003Sv650',
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


app.use(express.static(path.join(__dirname, 'public')));

app.get('/dash', function(req, res){
  res.sendFile(path.join(__dirname, './public/dashboard.html'));
});

app.post('/upload', function(req, res){
    console.log("file uploaded!");
  // create an incoming form object
  var form = new formidable.IncomingForm();

  // specify that we want to allow the user to upload multiple files in a single request
  form.multiples = true;

  // store all uploads in the /uploads directory
  form.uploadDir = path.join(__dirname, '/uploads');

  // every time a file has been uploaded successfully,
  // rename it to it's orignal name
  form.on('file', function(field, file) {
    fs.rename(file.path, path.join(form.uploadDir, file.name));
    console.log("file uploaded!");
  });

  // log any errors that occur
  form.on('error', function(err) {
    console.log('An error has occured: \n' + err);
  });

  // once all the files have been uploaded, send a response to the client
  form.on('end', function() {
    res.end('success');
  });

  // parse the incoming request containing the form data
  form.parse(req);

});

app.listen(8080, function () {
    console.log('Node app is running on port 8080');
});
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Require connection 
var connection = require("./config/connection.js");

// Import routes and give the server access to them.
var routes = require("./controllers/JobsContoller.js");
app.use(routes);


// port must be set to 8080 because incoming http requests are routed from port 80 to port 8080
app.listen(8080, function () {
    console.log('Node app is running on port 8080...');
});

