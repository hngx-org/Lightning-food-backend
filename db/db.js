const { Sequelize } = require('sequelize');
require('dotenv').config();

const URI = process.env.MYSQL_ADDON_URI;
console.log(URI);
const sequelize = new Sequelize(URI, { dialect: 'mysql', logging: false });

//The below is for local connection

// const sequelize = new Sequelize('free_lunch_db', 'kachi', 'onyedikach1', {
//   host: 'localhost',
//   dialect: 'mysql',
// });

module.exports = sequelize;
