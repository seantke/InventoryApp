var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var invSchema = new Schema({
  title: String,
  desc: String
});

var Inventory = mongoose.model('inventory', invSchema, 'inventory');

module.exports = Inventory;
