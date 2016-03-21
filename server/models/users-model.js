var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
  firstName:String,
  lastName:String,
  username:String,
  email: String,
  password: String,
  token: String,
  type:Number,
  tokenExp: Date,
  modifiedDate: Date,
  date: Date
});

var Users = mongoose.model('users', usersSchema, 'users');

module.exports = Users;
