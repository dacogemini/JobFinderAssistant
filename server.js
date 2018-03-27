const express = require('express');
var exphbs  = require('express-handlebars');
const app = express();

const bodyParser = require('body-parser');
const mysql = require('mysql');

var Job = require('./models/jobs.js');

/*Nick added a favicon*/
const favicon = require('serve-favicon');
app.use(favicon(path.join(__dirname, 'app/public', 'favicon.ico')));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

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

