const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/payment_gateway', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));