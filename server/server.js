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
  newInv.model = req.body.model;
  newInv.manufacturer = req.body.manufacturer;
  newInv.quantity = req.body.quantity;
  newInv.description = req.body.description;
  newInv.modifiedBy = req.body.modifiedBy;
  newInv.modifiedDate = req.body.modifiedDate;
  newInv.date = req.body.date;
  newInv.save(function(err, inv) {
    if (err) {
      res.send('error saving new inv');
    } else {
      res.sendStatus(200);
    }
  });
});

app.post('/inventory/edit', function(req, res) {
  Inventory.findById(req.body._id, function(err, item){
    if(err) throw err;

    item.model = req.body.model;
    item.manufacturer = req.body.manufacturer;
    item.quantity = req.body.quantity;
    item.description = req.body.description;
    item.modifiedBy = req.body.modifiedBy;
    item.modifiedDate = req.body.modifiedDate;
    item.date = req.body.date;

    item.save(function(err){
      if (err) throw err;
    });

    res.send("Done");
  });
});

app.post('/inventory/delete', function(req, res) {
  Inventory.find({
    _id: req.body._id
  }).remove().exec(function(err, item) {
    if (err) {
      throw err;
    } else {
      res.send("Removed");
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
