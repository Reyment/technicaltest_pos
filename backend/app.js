const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const categorryRoutes = require('./routes/categoryRoutes');
const orderRoutes = require('./routes/orderRoutes');
const cors = require('cors');
const loginRoutes = require('./routes/loginRoutes');



const app = express();
app.use(cors());

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log('MongoDB connection error:', error.message));

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

 //   api
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/categories', categorryRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/login', loginRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
