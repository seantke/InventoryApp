//Imports
var express = require('express');
var route = express.Router();
var Inventory = require('../models/inventory-model');

//Routers
route.get('/get', function(req, res) {
  Inventory.find({})
    .exec(function(err, inv) {
      res.send(inv);
    });
});
route.get('/get/:id', function(req, res) {
  Inventory.findOne({
      _id: req.params.id
    })
    .exec(function(err, inv) {
      res.send(inv);
    });
});

route.post('/new', function(req, res) {
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

route.post('/edit', function(req, res) {
  Inventory.findById(req.body._id, function(err, item) {
    if (err) throw err;

    item.model = req.body.model;
    item.manufacturer = req.body.manufacturer;
    item.quantity = req.body.quantity;
    item.description = req.body.description;
    item.modifiedBy = req.body.modifiedBy;
    item.modifiedDate = req.body.modifiedDate;
    item.date = req.body.date;
    item.instances = req.body.instances;

    item.save(function(err) {
      if (err) throw err;
      res.send("Done");
    });
  });
});

route.post('/delete', function(req, res) {
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

module.exports = route;
