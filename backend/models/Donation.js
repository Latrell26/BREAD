const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  donorName: String,
  email: String,
  contact: String,
  amount: Number,
  paymentMethod: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Donation', donationSchema);