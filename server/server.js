"use strict";
//Imports
var express     = require('express');
var morgan      = require('morgan');
var bodyParser  = require('body-parser');
var jwt         = require('jsonwebtoken');
var mongoose    = require('mongoose');

//App Vars
var app = express();
var PORT = process.env.PORT || 3000;
// app.set('views', 'public/views');
// app.set('view engine', 'jade');

//Middleware
app.use(morgan('dev'));
app.use("/public", express.static(__dirname+"/../public"));
app.use("/node_modules", express.static(__dirname+"/../node_modules"));

//Routers
app.get('/', function(req, res){
  res.sendFile('/public/views/index.html',{root:__dirname+'/..'});
});


//Listening Port
app.listen(PORT, function(){
  console.log("Listening on localhost:"+PORT);
});
//Error catch
process.on('uncaughtException', function(err){
  console.log(err);
});
