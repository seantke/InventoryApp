var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var modelSchema = new Schema({
  model: String,
  asset: String,
  serial: String,
  assignedTo: String,
  assignHistory: Array,
  modifiedBy: String,
  modifiedDate: Date,
  date: Date
});

var Model = mongoose.model('model', modelSchema, 'model');

module.exports = Model;
