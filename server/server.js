"use strict";
//Imports
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');

//App Vars
var app = express();
var PORT = process.env.PORT || 3000;
// app.set('views', 'public/views');
// app.set('view engine', 'jade');

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

app.get('/inventory/get', function(req, res){
  res.send(db);
});

app.post('/inventory/new', function(req, res) {
  console.log(req.body);
  db.push({
    title:req.body.title,
    desc:req.body.desc
  });
  res.sendStatus(200);
});


//Listening Port
app.listen(PORT, function() {
  console.log("Listening on localhost:" + PORT);
});
//Error catch
process.on('uncaughtException', function(err) {
  console.log(err);
});

var db = [
  {
    title: "Sean",
    desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    a: {
      href: "http://youtube.com",
      display: "Youtube"
    }
  },
  {
    title: "Bill",
    desc: "i32980v0qbnv0",
    a: {
      href: "http://google.ca",
      display: "Google"
    }
  },
  {
    title: "Adam",
    desc: "vishv02h1-0h-ahia",
    a: {
      href: "http://yahoo.ca",
      display: "Yahoo"
    }
  },
  {
    title: "Dylan",
    desc: "jva;289hlskhv01hv",
    a: {
      href: "http://cnn.com",
      display: "CNN"
    }
  },
  {
    title: "James",
    desc: "dav02hv02h48ha8vh",
    a: {
      href: "http://reddit.com",
      display: "Reddit"
    }
  }
];
