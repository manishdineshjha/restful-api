const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/products', productRoutes);

module.exports = app;
