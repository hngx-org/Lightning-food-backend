const { Sequelize } = require('sequelize');
require('dotenv').config();

const URI = process.env.MYSQL_ADDON_URI;

const sequelize = new Sequelize(URI, { dialect: 'mysql', logging: false });

module.exports = sequelize;
