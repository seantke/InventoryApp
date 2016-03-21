//Imports
var express = require('express');
var route = express.Router();
var Users = require('../models/users-model');

//Routers
route.post('/register', function(req, res) {
  Users.findOne({
    email: req.body.email
  }, function(err, item) {
    if (err) throw err;
    if (item) {
      res.send("Email " + item.email + " already exists!").status(409);
    } else {
      var newUser = new Users();
      newUser.firstName = req.body.firstName;
      newUser.lastName = req.body.lastName;
      newUser.email = req.body.email;
      newUser.password = req.body.password;
      newUser.token = "abc123";
      newUser.type = 1;
      newUser.tokenExp = +Date.now() + 10000000;
      newUser.date = +Date.now();
      newUser.save(function(err, user) {
        if (err) {
          res.send('error saving new inv');
        } else {
          res.send("User created").status(200);
        }
      });
    }
  });
});

route.get('/', function(req, res) {
  Users.find({}).select('token email').exec(function(err, users) {
    if (err) throw err;
    res.send(users).status(200);
  });
});

module.exports = route;
