const { Sequelize } = require('sequelize');
require('dotenv').config();

const URI = process.env.MYSQL_ADDON_URI;

const sequelize = new Sequelize(URI, { dialect: 'mysql' });

module.exports = sequelize;
