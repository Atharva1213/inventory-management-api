const mongoose = require('mongoose');

const headphoneSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  quantity: Number,
});

const Headphone = mongoose.model('Headphone', headphoneSchema);

module.exports = Headphone;
