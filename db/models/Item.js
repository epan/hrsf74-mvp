const mongoose = require('mongoose');
const db = require('../index');

const itemSchema = mongoose.Schema({
  list: {type: String, default: 'test'},
  kind: String,
  text: String
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
