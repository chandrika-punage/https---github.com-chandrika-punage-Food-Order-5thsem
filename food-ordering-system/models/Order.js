// const mongoose = require('mongoose');

// const orderSchema = new mongoose.Schema({
//   foodId: { type: mongoose.Schema.Types.ObjectId, ref: 'Food', required: true },
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   orderId: { type: String, required: true, unique: true }, // Adjust the order ID field
//   createdAt: { type: Date, default: Date.now },
//   updatedAt: { type: Date, default: Date.now },
//   deliveryAddress: { type: String }, // Example: Additional field for delivery address
//   status: { type: String, enum: ['placed', 'processing', 'shipped', 'delivered'], default: 'placed' },
// });

// const Order = mongoose.model('Order', orderSchema);

// module.exports = Order;



const mongoose = require('mongoose');

// Define order schema 
const orderSchemaPart1 = new mongoose.Schema({
  foodId: { type: mongoose.Schema.Types.ObjectId, ref: 'Food', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  orderId: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  deliveryAddress: { type: String },
  status: { type: String, enum: ['placed', 'processing', 'shipped', 'delivered'], default: 'placed' },
});

// Define order schema for the second question
const orderSchemaPart2 = new mongoose.Schema({
  invoiceId: String,
  userInfo: {
    name: String,
    email: String,
  },
  paymentDetails: {
    amount: Number,
    cardNumber: String,
    // Add other payment details as needed
  },
});

// Export both order models
let OrderPart1;
let OrderPart2;

try {
  // Try to fetch the existing models from the Mongoose models registry
  OrderPart1 = mongoose.model('OrderPart1');
} catch (error) {
  // If the model doesn't exist, define it
  OrderPart1 = mongoose.model('OrderPart1', orderSchemaPart1);
}

try {
  OrderPart2 = mongoose.model('OrderPart2');
} catch (error) {
  OrderPart2 = mongoose.model('OrderPart2', orderSchemaPart2);
}

module.exports = { OrderPart1, OrderPart2 };



