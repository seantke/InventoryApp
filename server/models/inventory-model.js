var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var invSchema = new Schema({
  model: String,
  manufacturer: String,
  quantity: Number,
  description: String,
  instances:[
    {
      asset:String,
      serial:String
    }
  ],
  modifiedBy: String,
  modifiedDate: Date,
  date: Date
});

var Inventory = mongoose.model('inventory', invSchema, 'inventory');

module.exports = Inventory;
