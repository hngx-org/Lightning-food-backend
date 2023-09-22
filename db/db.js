const { Sequelize } = require('sequelize');
require('dotenv').config();

const URI = process.env.MYSQL_ADDON_URI;

const sequelize = new Sequelize(URI, { dialect: 'mysql', logging: false });

//The below is for local connection

// const sequelize = new Sequelize('free_lunch_db', 'root', '64632120', {
//     host: 'localhost',
//     dialect: 'mysql'
// });

module.exports = sequelize;
