const Order = require('../models/order');
const emailConfig = require('../config/emailConfig');

async function getOrdersByUser(userId) {
  return Order.find({ userId }).select('orderId status otpVerified');
}

async function sendOTP(orderId) {
  const order = await Order.findOne({ orderId });
  if (order && order.status === 'delivered' && !order.otpVerified) {
    // Assuming you have a function to send OTP via email in your emailConfig file
    const otp = generateOTP();
    await emailConfig.sendOTP(order.userId, otp); // Implement email sending logic
    order.otpVerified = true;
    await order.save();
    return true;
  } else {
    return false;
  }
}