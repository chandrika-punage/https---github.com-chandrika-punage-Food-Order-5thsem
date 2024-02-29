const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String }, // Example: Image URL, adjust based on your image storage approach
  category: { type: String, enum: ['starter', 'main-course', 'dessert'], required: true }, // Adjust the categories
  nutritionalInfo: { type: String }, // Example: Additional field for nutritional information
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;
