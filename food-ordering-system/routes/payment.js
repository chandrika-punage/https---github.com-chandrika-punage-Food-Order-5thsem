const express = require('express');
const Order = require('../models/order');

const router = express.Router();

// Dummy function to simulate payment processing
async function processPayment(paymentDetails) {
  // Implement your payment gateway logic here
  // For simplicity, we assume the payment is successful
  return { success: true };
}

// Endpoint to initiate payment
router.post('/processPayment', async (req, res) => {
  try {
    // Simulate payment processing
    const paymentResult = await processPayment(req.body.paymentDetails);

    // If payment is successful, store order details in MongoDB
    if (paymentResult.success) {
      const order = new Order({
        invoiceId: generateInvoiceId(),
        userInfo: req.body.userInfo,
        paymentDetails: req.body.paymentDetails,
      });

      await order.save();

      res.status(200).json({ success: true, message: 'Payment successful' });
    } else {
      res.status(400).json({ success: false, message: 'Payment failed' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Helper function to generate a unique invoice ID (you may need a more robust solution)
function generateInvoiceId() {
  return `INV-${Math.floor(Math.random() * 100000)}`;
}

module.exports = router;
