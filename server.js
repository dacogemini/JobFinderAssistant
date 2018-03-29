// Dependencies
const express = require('express');
var exphbs  = require('express-handlebars');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
var path = require('path');
var formidable = require('formidable');
var fs = require('fs');

var Job = require('./models/jobs.js');

/*Nick added a favicon*/
const favicon = require('serve-favicon');
app.use(favicon(path.join(__dirname, '/public', 'favicon.ico')));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Default route
// app.get('/', function (req, res) {
//     return res.send({
//         error: true,
//         message: 'Home'
//     })
// });


// Require connection 
var connection = require("./config/connection.js");
// =============================================================================
// Retrieval 
// =============================================================================

var routes = require("./controllers/JobsContoller.js");
app.use(routes);

// Retrieve full list 
// app.get('/list', function (req, res) {
//     connection.query('SELECT * FROM Job_Cat_db', function (error, results, fields) {
//         if (error) throw error;
//         return res.send({
//             error: false,
//             data: results,
//             message: 'Jobs list: '
//         });

//     })
// });


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

