// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Add your user schema fields
});

const User = mongoose.model('User', userSchema);

module.exports = User;
