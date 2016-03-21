//Imports
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var invRouter = require('./routes/inventory-routes');
var usersRouter = require('./routes/users-routes');
var authMw = require('./auth-mw');
//MONGO
// var mongoServer = process.env.MONGOLAB_URI || "mongodb://localhost/InventoryApp";
var mongoServer = "mongodb://localhost/InventoryApp";
mongoose.connect(mongoServer);
var db = mongoose.connection;
db.on('error', function(msg) {
  console.log("db connection failed");
});
db.once('open', function() {
  console.log("db connection succeeded");
});

//App Vars
var app = express();
var PORT = process.env.PORT || 3000;

//Middleware
app.use(morgan('dev'));
app.use("/public", express.static(__dirname + "/../public"));
app.use("/node_modules", express.static(__dirname + "/../node_modules"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  next();
});
app.use('/inventory', invRouter);
app.use('/users', usersRouter);


app.get('/', function(req, res) {
  res.sendFile('/public/views/index.html', {
    root: __dirname + '/..'
  });
});

//Listening Port
app.listen(PORT, function() {
  console.log("Listening on localhost:" + PORT);
});
//Error catch
process.on('uncaughtException', function(err) {
  console.log(err);
});
