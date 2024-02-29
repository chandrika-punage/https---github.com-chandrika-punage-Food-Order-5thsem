// // index.js
// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const userRoutes = require('./routes/userRoutes');
// const foodRoutes = require('./routes/foodRoutes');
// const orderRoutes = require('./routes/orderRoutes');

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3000;

// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log('MongoDB database connection established successfully');
// });
// connection.on('error', (err) => {
//   console.error('MongoDB connection error: ', err);
// });

// app.use(express.json());

// app.use('/api/users', userRoutes);
// app.use('/api/foods', foodRoutes);
// app.use('/api/orders', orderRoutes);

// app.use(express.static('public'));

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


//***************************/

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/userRoutes');
const foodRoutes = require('./routes/foodRoutes');
const orderRoutes = require('./routes/orderRoutes');
const paymentRoutes = require('./routes/payment');
const indexRoutes = require('./routes/index');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://0.0.0.0:27017//food', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});
connection.on('error', (err) => {
  console.error('MongoDB connection error: ', err);
});

// Middleware
app.use(express.json());
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/foods', foodRoutes);
app.use('/api/orders', orderRoutes);
app.use('/payment', paymentRoutes);
app.use('/', indexRoutes);

app.use(express.static('public'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
