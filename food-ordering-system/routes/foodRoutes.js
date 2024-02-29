// routes/foodRoutes.js
const express = require('express');
const router = express.Router();
const Food = require('../models/Food');

// Example route
router.get('/', (req, res) => {
  res.send('Food route is working!');
});

module.exports = router;
