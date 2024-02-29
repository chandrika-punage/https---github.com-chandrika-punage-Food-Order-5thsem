// const express = require('express');
// const router = express.Router();

// router.get('/', (req, res) => {
//   res.send('Welcome to the payment gateway test');
// });

// module.exports = router;



const express = require('express');
const router = express.Router();

// Payment gateway test route
router.get('/', (req, res) => {
  res.send('Welcome to the payment gateway test');
});

// Orders routes
router.use('/orders', require('./orderRoutes'));

module.exports = router;


