// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Example route
router.get('/', (req, res) => {
  res.send('Order route is working!');
});

module.exports = router;
