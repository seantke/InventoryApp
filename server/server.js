"use strict";
//Imports
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
var Inventory = require('./models/inventory-model');

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

//Routers
app.get('/', function(req, res) {
  res.sendFile('/public/views/index.html', {
    root: __dirname + '/..'
  });
});

app.get('/inventory/get', function(req, res) {
  Inventory.find({})
    .exec(function(err, inv) {
      res.send(inv);
    });
});

app.post('/inventory/new', function(req, res) {
  var newInv = new Inventory();
  newInv.title = req.body.title;
  newInv.desc = req.body.desc;
  newInv.save(function(err, inv) {
    if (err) {
      res.send('error saving new inv');
    } else {
      res.sendStatus(200);
    }
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
