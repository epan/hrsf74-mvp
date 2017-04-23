const mongoose = require('mongoose');
const db = require('../index');

const itemSchema = mongoose.Schema({
  text: String
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
