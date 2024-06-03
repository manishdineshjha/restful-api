const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = require('./user')(sequelize, Sequelize);
const Product = require('./product')(sequelize, Sequelize);

module.exports = {
  sequelize,
  User,
  Product
};
